import css from './Modal.module.css';
const { Component } = require("react");


class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('click', this.handleBackdropClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('click', this.handleBackdropClick);
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
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    <img className={css.imgmodal} src={url} alt={alt} onClick={this.handleBackdropClick} />
                    <button className={css.btnClose} onClick={this.handleBackdropClick}>
                        X
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;
 