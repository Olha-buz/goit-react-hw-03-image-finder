
import css from '../ImageGallery/ImageGallery.module.css';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
    handleClick = () => {
        this.props.onImageClick(this.props.largeImageURL);
    };
    render() {
        const { id, webformatURL} = this.props;
        return (
             <li key={id}  className={css.galleryItem} onClick={this.handleClick}>
                    <img
                        className={css.imgGalleryItem}
                        src={webformatURL}
                        alt="img"
                    />
                </li>
        )
    }
}

// function ImageGalleryItem({ articles, onImage }) {

//     return (
//         <>
//             {articles.map(({ id, webformatURL, largeImageURL, tags }) => (
//                 <li key={id}  className={css.galleryItem}>
//                     <img
//                         className={css.imgGalleryItem}
//                         src={webformatURL}
//                         alt="img"
//                         onClick={() => onImage(largeImageURL, tags, id)}
//                     />
//                 </li>
//             ))}
//         </>
//     )
// };

// ImageGalleryItem.propTypes = {
//     id: PropTypes.string,
//     imageUrl: PropTypes.string,
//     largeImageUrl: PropTypes.string,
//     tags: PropTypes.string,
//     onImage: PropTypes.func,
// }

// export default imageGalleryItem;