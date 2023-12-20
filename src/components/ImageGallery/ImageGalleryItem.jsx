import PropTypes from 'prop-types';

function ImageGalleryItem({ articles, onImage }) {
    return (
        <>
            {articles.map(({ id, imageUrl, largeImageUrl, tags }) => (
                <li key={id}  className="galleryItem">
                    <img
                        className="imgGalleryItem"
                        src={imageUrl}
                        alt="img"
                        onClick={() => onImage(largeImageUrl, tags, id)}
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