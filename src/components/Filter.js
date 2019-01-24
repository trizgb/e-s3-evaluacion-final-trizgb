import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        const {actionFilter} = this.props;
        return (
            <div className="app__filter">
                <input type="text" className="app__filter-name" placeholder="Search the character" onKeyUp={actionFilter} />
            </div>
        );
    }
}

Filter.propTypes = {
    actionFilter: PropTypes.func.isRequired
}

export default Filter;