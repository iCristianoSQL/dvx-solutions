import { api } from './api';
import { IMarsRoverResponse } from '../interfaces/marsRover';
import { toastMessage } from '../utils/toastMessage';

export const NasaServices = {
    getMarsRoverPhoto: async (page: number) => {
        try {
            const response: IMarsRoverResponse = await api.get(`curiosity/photos?sol=1000&page=${page}&api_key=RWXbIVEWBx3o1D7eLBsdhSrZf3qOp36Evij7gnp3`)
            return response.data.photos
        } catch (error) {
            toastMessage({
                message: 'Não foi possivel completar a sua solicitação no momento, desculpe!',
                type: 'error'
            })
            throw error
        }
    }
}