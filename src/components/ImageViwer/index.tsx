
import Modal from "react-modal"

interface ImageViwerModal {
    isOpen: boolean;
    onRequestClose: () => void;
    imgURL: string;
}

export const ImageViwer = ({ isOpen, onRequestClose, imgURL }: ImageViwerModal) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <img src={imgURL} alt="Image Viwer" className="rounded-lg" />
        </Modal >
    )
}
