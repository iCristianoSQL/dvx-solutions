import { useEffect, useState } from 'react'

import { IPhotos } from '../../interfaces/marsRover'

import { NasaServices } from '../../services/marsRover'
import { toastMessage } from '../../utils/toastMessage'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const Card = () => {
    const [response, setResponse] = useState<IPhotos[]>([] as IPhotos[])

    useEffect(() => {
        const getTest = async () => {
            try {
                const response = await NasaServices.getMarsRoverPhoto(2)
                setResponse(response)
            } catch (error) {
                toastMessage({
                    message: 'Não foi possivel completar a sua solicitação no momento, desculpe!',
                    type: 'error'
                })
            }
        }
        getTest()
    }, [])

    return (
        <section className='flex overflow-auto gap-4 w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {response.map((event) => {
                    return (
                        <SwiperSlide className='mt-12' key={event.id}>
                            <div className='h-2/5'>
                                <img src={event.img_src} alt="Card Image" className='h-full w-full mx-auto mb-auto mr-auto rounded-lg' />
                            </div>
                            <div className='px-3 font-sans'>
                                <span className='text-neutral-600 mt-3'>April 17, 2022</span>
                                <p className='text-default-color font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat quam nibh.</p>
                            </div>
                            <button className='text-white bg-cyan-600 w-full h-8 mt-3.5 rounded-lg'>Ver</button>
                        </SwiperSlide>
                    )
                })}
            </Swiper>


        </section>
    )
}