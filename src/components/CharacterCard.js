
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const { image, name, house } = this.props;
        return (
            <div className="character">
                <img className="character__image" src={image} alt={name} />
                <h2 className="character__name">{name}</h2>
                <p className="character__house">{house ? house : '✖'}</p>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
}

export default CharacterCard;