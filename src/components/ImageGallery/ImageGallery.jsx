import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={css.gallery}>
            <ImageGalleryItem images={images} onImage={onImageClick} />
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
};