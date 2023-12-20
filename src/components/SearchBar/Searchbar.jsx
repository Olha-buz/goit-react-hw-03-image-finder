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
            Notiflix.Notify.failure('You have to enter something');
            return;
        };
        this.props.onSubmitHandler(this.state);
        this.reset();
    };

    reset() {
        this.setState({name:''})
    };

    render() {
        return (
            <header>
                <form onSubmit={ this.handleSubmit }>
                    <button type="submit">
                        <span>
                            Search
                        </span>
                    </button>

                    <input
                        type="text"
                        onChange={ this.handleChange }
                        autoFocus
                        placeholder='Search'
                     />

                </form>
            </header>
        )
    }
}

export default SearchBar;