import { useEffect } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from "./Modal.styled";

export const ModalByHooks = ({ largeImageURL, tags, onCloseModal }) => {
    const handleCloseByOverlay = event => {
        if (event.target === event.currentTarget) {
            onCloseModal();
        }
    }

    useEffect(() => {
        const handleCloseByEsc = event => {
            if (event.code === 'Escape') {
                onCloseModal();
            }
        }
        
        window.addEventListener('keydown', handleCloseByEsc);

        return () => {
            window.removeEventListener('keydown', handleCloseByEsc);
        };
    }, [onCloseModal]);

    return (
        <Overlay onClick={handleCloseByOverlay}>
            <ModalWindow>
                <img src={largeImageURL} alt={tags} />
            </ModalWindow>
        </Overlay>
    )
}

ModalByHooks.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
}
