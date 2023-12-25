import css from './Buttom.module.css';

export default function Button({ onClick }) {
    return (
        <Button
            className={css.button}
            type="button"
            onClick={onClick} >
            Load More
        </Button>
    )
};

