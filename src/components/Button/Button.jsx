import PropTypes from 'prop-types';
import { LoadMoreBtn } from "./Button.styled";

export function Button({ onClickLoadMore }) {
    return(
        <LoadMoreBtn
            type="button"
            onClick={onClickLoadMore}
        >
            Load more
        </LoadMoreBtn>
    )
}

Button.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
}