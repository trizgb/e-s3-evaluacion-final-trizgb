import React, { Component } from 'react';
import Card from './card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterList extends Component {
    render() {
        const { filterCharResults } = this.props;
        return (
            <ul className="app__list">
                {filterCharResults.map(item => {
                    return (
                        <li className="app__list-character" key={item.id}>
                            <Link className="app__list-link" to={`/character/${item.id}`}>
                                <Card
                                    image={item.image}
                                    title={item.name}
                                    subtitle={item.house}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

CharacterList.propTypes = {
    filterCharResults: PropTypes.arrayOf(PropTypes.object)
};

export default CharacterList;