import Notiflix from 'notiflix';
import { Component } from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    state = {
        name: '',
    }

    handleChange = evt => {
        const { value } = evt.currentTarget;
        this.setState({ name: value });

    };

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.name.trim() === '') {
            Notiflix.Notify.failure('You have to enter something');
            return;
        };
        this.props.onSubmitHandler(this.state.name);
        this.setState({ name: '' });
    };

    render() {
        return (
            <header className={css.headerSearch}>
                <form className={css.formSearch} onSubmit={ this.handleSubmit }>
                    
                    <input
                        className={css.inputSearch}
                        type="text"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={this.state.name}
                        autoFocus
                        placeholder='Search image name'
                    />
                    
                    <button className={css.btnSearch} type="submit">
                        <span>
                            Search
                        </span>
                    </button>

                </form>
            </header>
        )
    }
}

SearchBar.propTypes = {
    name: PropTypes.string,
}

export default SearchBar;