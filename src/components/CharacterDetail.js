import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends Component {

    // deadOrAlive() {
    //     const { filterCharResults } = this.props;

    //     if (filterCharResults.alive === true) {
    //         return <p className="character__status--detail">Status: Alive</p>
    //     } else {
    //         return <p className="character__status--detail">Status: Deceased</p>
    //     }
    // }

    render() {
        const { filterCharResults } = this.props;
        const charId = this.props.match.params.id;



        if (filterCharResults.length > 0 && charId < filterCharResults.length) {
            const selectedChar = filterCharResults[charId];

            const image = selectedChar.image;
            const name = selectedChar.name;
            const house = selectedChar.house;
            const birth = selectedChar.yearOfBirth;
            const patronus = selectedChar.patronus;
            const alive = selectedChar.alive;

            return (
                <div className="character character--detail">
                    <div className="character__image-container--detail">
                        <img className="character__image--detail" src={image} alt={name} />
                    </div>
                    <h2 className="character__name--detail">{name}</h2>
                    <p className="character__house--detail">House: {house}</p>
                    <p className="character__birth--detail">Year of Birth: {birth}</p>
                    <p className="character__patronus--detail">Patronus: {patronus}</p>
                    <p className="character__status--detail">Status: {alive ? 'Alive 😊' : 'Deceased 😵'} </p>
                    <Link to="/">Mischief Managed</Link>

                </div>
            );
        } else {
            return (
                <Fragment>
                    <p>Pos no va</p>
                    <Link to="/">Mischief Managed</Link>
                </Fragment>
            );
        }
    }
}

CharacterDetail.propTypes = {
    filterCharResults: PropTypes.arrayOf(PropTypes.object),
    charId: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired
};


export default CharacterDetail;