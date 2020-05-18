import * as React from 'react';
import PropTypes from 'prop-types';
require('./index.scss');


const Search = ({ onKeyUpAction, onSearch }) => {

    const [value, setValue] = React.useState('');

    return (
        <div className="search">
            <input
                type="text"
                className="search-input"
                placeholder="Accio character"
                onKeyUp={onKeyUpAction}
                onChange={(e) => setValue(e.currentTarget.value)}
                // defaultValue={value}
            />
            {/* <button onClick={onSearch}>Search</button> */}
        </div>
    )
}

Search.propTypes = {
    onKeyUpAction: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Search;