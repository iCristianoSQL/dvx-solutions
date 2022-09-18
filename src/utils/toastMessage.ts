import { toast } from 'react-toastify';
import { IToastMessage } from './@types';

const successEmojis = ['😀', '😁', '😄', '😉']
const errorEmojis = ['😐', '😔', '😕', '😢']

const genericTreatment = (length: number) => {
    const min = Math.ceil(0)
    const max = Math.floor(length)
    const result = Math.floor(Math.random() * (max - min) + min)
    return result
}

export const toastMessage = ({ message, type }: IToastMessage) => {
    let toastType = {
        type: toast[type],
        emojis: type === 'success' ? successEmojis : errorEmojis,
    }
    toastType.type(`${message} ${toastType.emojis[genericTreatment(toastType.emojis.length)]}`)
}