import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import { ModalByHooks } from "../Modal/ModalByHooks";

export const ImageGalleryItemByHooks = ({ image: { webformatURL, largeImageURL, tags } }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => (!prevState));
    }

    return (
        <>
            <GalleryItem onClick={toggleModal}>
                <GalleryItemImage src={webformatURL} alt={tags} />
            </GalleryItem>
            {showModal && <ModalByHooks
                largeImageURL={largeImageURL}
                tags={tags}
                onCloseModal={toggleModal}
            />}
        </>
    )
}

ImageGalleryItemByHooks.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired
}
