import PropTypes from 'prop-types';
import css from './Buttom.module.css';
import { Component } from 'react';

export class Button extends Component {
    render() {
        const { onClick, isVisible } = this.props;


        if (!isVisible) {
            return null;
        }

        return (
            <div>
                <button
                    className={css.button}
                    type="button"
                    onClick={onClick} >
                    Load More
                </button>
            </div>
        )
    }
    
};

Button.propTypes = {
    onClick: PropTypes.func,
    isVisible: PropTypes.bool,
};
