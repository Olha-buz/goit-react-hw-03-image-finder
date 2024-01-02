import { Component } from 'react';
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
    handleOpen = (largeImageURL) => {
        this.props.onImageClick(largeImageURL);
    }

    render() {
        const { images } = this.props;
        return (
            <ul className={css.gallery}>
                {images.map((image) => (
                    <ImageGalleryItem
                        key={image.id}
                        webformatUrl={image.webformatURL}
                        largeImageUrl={image.largeImageURL}
                        onImageClick={this.handleOpen}
                    />
                ))}
            </ul>
        )
    }
};

