import { Component } from 'react';

class ImageGallery extends Component {
    render() {
        return (
            <ul className="gallery">
                {this.props.children}
            </ul>

        )
    }
};

export default ImageGallery;