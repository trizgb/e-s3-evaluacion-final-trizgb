import * as React from 'react';
import PropTypes from 'prop-types';
require('./index.scss');


const Search = ({ onKeyUpAction, onSearch }) => {

    return (
        <div className="search">
            <input
                type="text"
                className="search-input"
                placeholder="Accio character"
                onKeyUp={onKeyUpAction}
            />
        </div>
    )
}

Search.propTypes = {
    onKeyUpAction: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Search;