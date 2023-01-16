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



// export class Modal extends Component {
//     static propTypes = {
//         largeImageURL: PropTypes.string.isRequired,
//         tags: PropTypes.string.isRequired,
//         onCloseModal: PropTypes.func.isRequired,
//     }

//     handleCloseByOverlay = (event) => {
//         if (event.target === event.currentTarget) {
//             this.props.onCloseModal();
//         }
//     }

//     handleCloseByEsc = event => {
//         if (event.code === 'Escape') {
//             this.props.onCloseModal();
//         }
//     }

//     componentDidMount() {
//         window.addEventListener('keydown', this.handleCloseByEsc);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleCloseByEsc);
//     }
    
//     render() {
//         const { largeImageURL, tags } = this.props;

//         return (
//             <Overlay onClick={this.handleCloseByOverlay}>
//                 <ModalWindow>
//                     <img src={largeImageURL} alt={tags} />
//                 </ModalWindow>
//             </Overlay>
//         )
//     }
// }