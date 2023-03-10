import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Gallery } from "./ImageGallery.styled";
import { Loader } from "../Loader/Loader";
import { ImageGalleryItemByHooks } from "../ImageGalleryItem/ImageGalleryItemByHooks";
import { Button } from "../Button/Button";

export const ImageGalleryByHooks = ({ queryImages }) => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState(queryImages);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setImages([]);
        setPage(1);
        setQuery(queryImages);
    }, [queryImages])

    useEffect(() => {
        if (!query) {
            return;
        };

        const getImages = async () => {
            try {
                setIsLoading(true);

                let imagesFromAPI = await api.fetchImages(query, page);
                imagesFromAPI = imagesFromAPI.map(image => {
                    return image = {
                        id: image.id,
                        largeImageURL: image.largeImageURL,
                        webformatURL: image.webformatURL,
                        tags: image.tags,
                    }
                });
                setImages(prevState => (
                    [...prevState, ...imagesFromAPI]
                ));

            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getImages();
    }, [query, page])

    // const catchWrongQuery = () => {
    //     toast.error("There aren't images by this query.", {position: "top-left"})
    // }

    // const catchLastImages = () => {
    //     toast.info("There aren't images more.", {position: "top-center"})
    // }

    const handleLoadMore = () => {
        setPage(prevState => (prevState + 1));
    }

    return (
        <>
            {images?.length !== 0 &&
            <Gallery>
                {images?.map((image) => (
                    <ImageGalleryItemByHooks
                        key={image.id}
                        image={image}
                    />
                ))}
            </Gallery>}
            {isLoading && <Loader />}
            {!isLoading && images?.length!== 0 && <Button onClickLoadMore={handleLoadMore} />}
            {isError && toast.error("We have error.")}
        </>
    )
}

ImageGalleryByHooks.propTypes = {
    queryImages: PropTypes.string.isRequired,
}

ImageGalleryItemByHooks.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired
}
