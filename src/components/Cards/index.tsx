import { useRef, useState } from 'react'

import { IPhotos } from '../../interfaces/marsRover'

import { NasaServices } from '../../services/marsRover'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useQuery } from 'react-query';
import dayjs from 'dayjs';

import { ImageViwer } from "../index"

export const Card = () => {
    const dataResponse = useRef<IPhotos[]>([] as IPhotos[])
    const [isImageViwer, setIsImageViwer] = useState(false)
    const [imgURL, setImgURL] = useState('')

    const closeViwerModal = () => {
        setIsImageViwer(false)
    }

    const opeViwerModal = () => {
        setIsImageViwer(true)
    }

    const { } = useQuery('repos', async () => {
        const response = await NasaServices.getMarsRoverPhoto(2)
        dataResponse.current = response
    }, {
        staleTime: 1000 * 60, //one minute
    })

    const breakPoints = {
        440: {
            width: 440,
            slidesPerView: 1,
        },
        640: {
            width: 640,
            slidesPerView: 2,
        },
        768: {
            width: 768,
            slidesPerView: 3,
        },
        1100: {
            width: 1100,
            slidesPerView: 4,
        },
    }

    return (
        <section className='flex gap-4 w-full p-2'>
            <Swiper
                spaceBetween={50}
                breakpoints={breakPoints}
            >
                {dataResponse.current.map((event) => {
                    return (
                        <SwiperSlide className='mt-12 rounded-lg border-solid border-border-color border h-80 flex flex-col' key={event.id}>
                            <div className='h-2/5'>
                                <img src={event.img_src} alt="Card Image" className='h-full w-full mx-auto mb-auto mr-auto rounded-lg' />
                            </div>
                            <div className='px-3 sfont-sans mt-3.5'>
                                <span className='text-neutral-600 mt-3'>{dayjs(event.earth_date).format('MMM DD, YYYY')}</span>
                                <p className='text-default-color font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat quam nibh.</p>
                            </div>
                            <button onClick={() => { setImgURL(event.img_src); opeViwerModal() }} className='text-white bg-cyan-600 w-11/12 h-8 mt-3.5 rounded-lg self-center'>Ver</button>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <ImageViwer isOpen={isImageViwer} onRequestClose={closeViwerModal} imgURL={imgURL} />
        </section>
    )
}