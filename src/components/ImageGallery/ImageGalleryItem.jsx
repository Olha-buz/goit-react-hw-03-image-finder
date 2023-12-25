import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

function ImageGalleryItem({ articles, onImage }) {

    return (
        <>
            {articles.map(({ id, webformatURL, largeImageURL, tags }) => (
                <li key={id}  className={css.galleryItem}>
                    <img
                        className={css.imgGalleryItem}
                        src={webformatURL}
                        alt="img"
                        onClick={() => onImage(largeImageURL, tags, id)}
                    />
                </li>
            ))}
        </>
    )
};

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    largeImageUrl: PropTypes.string,
    tags: PropTypes.string,
    onImage: PropTypes.func,
}

export default ImageGalleryItem;