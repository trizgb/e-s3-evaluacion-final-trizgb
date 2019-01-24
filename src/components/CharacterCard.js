
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const { image, name, house } = this.props;
        return (
            <div className="character">
                <div className="character__image-container">
                    <img className="character__image" src={image} alt={name} />
                </div>
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

// si la house es gryffindor pinta la tarjeta roja / si es slytherin pintala verde / si es ravenclaw pintala azul y si es hufflepuff pintala amarilla