import Notiflix from 'notiflix';
import { Component } from 'react';

class SearchBar extends Component {
    state = {
        name: '',
        page: 1,
    }

    handleChange = evt => {
        const { value } = evt.currentTarget;
        this.setState({ name: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.name.trim() === '') {
            Notiflix.Notify.failure('You have to enter something')
        };
        return;
    };

    // this.props.onSubmitHandler(this.state);
    // this.reset();

    render() {
        return (
            <header>
                <form onSubmit={ this.handleSubmit }>
                    <button type="submit">
                        <span>
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="25"
                               height="25"
                               viewBox="0 0 20 20"
                            >
                                <title>search</title>
                                <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
                            </svg>
                        </span>
                    </button>

                    <input
                        type="text"
                        onChange={ this.handleChange }
                        autoComplete="off"
                        placeholder='Search'
                     />

                </form>
            </header>
        )
    }
}

export default SearchBar;