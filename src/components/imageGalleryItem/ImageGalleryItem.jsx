import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';


// export class ImageGalleryItem extends Component {
//     handleClick = () => {
//         this.props.onImageClick(this.props.largeImageURL);
//     };
//     render() {
//         const { id, webformatURL} = this.props;
//         return (
//              <li key={id}  className={css.galleryItem} onClick={this.handleClick}>
//                     <img
//                         className={css.imgGalleryItem}
//                         src={webformatURL}
//                         alt="img"
//                     />
//                 </li>
//         )
//     }
// }

export const ImageGalleryItem = ({ images, onImage }) => {
    return (
        <>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <li key={id}
                    className={css.galleryItem}
                    onClick={() => onImage(largeImageURL, tags, id)}
                >
                    <img
                        className={css.imgGalleryItem}
                        src={webformatURL}
                        alt={tags}

                    />
                </li>
            ))}
        </>
    )
};

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    imageURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    onImage: PropTypes.func,
}

// export default imageGalleryItem;