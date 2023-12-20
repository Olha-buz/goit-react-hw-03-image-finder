import PropTypes from 'prop-types';
const { Component } = require("react");


class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = evt => {
        if (evt.currentTarget === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    }

    render() {
        const { url, alt } = this.props;
        return (
            <div className='overlay' onClick={this.handleBackdropClick}>
                <div className='modal'>
                    <img src={url} alt={alt} />
                    <button className='btnClose' onClick={this.handleBackdropClick}>
                        X
                    </button>
                </div>
            </div>
            
        )
    }
}

export default Modal;
 
Modal.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    handleBackdropClick: PropTypes.func,
}