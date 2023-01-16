import { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from "./Modal.styled";

export class Modal extends Component {
    static propTypes = {
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        onCloseModal: PropTypes.func.isRequired,
    }

    handleCloseByOverlay = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onCloseModal();
        }
    }

    handleCloseByEsc = event => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseByEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseByEsc);
    }
    
    render() {
        const { largeImageURL, tags } = this.props;

        return (
            <Overlay onClick={this.handleCloseByOverlay}>
                <ModalWindow>
                    <img src={largeImageURL} alt={tags} />
                </ModalWindow>
            </Overlay>
        )
    }
}