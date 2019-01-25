import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends Component {

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
                <div className="container__character--detail">
                    <div className="character--detail">
                        <img className="character__image--detail" src={image} alt={name} />
                        <div className="character__items--detail">
                            <h2 className="character__name--detail">{name}</h2>
                            <p className="character__house--detail">House: {house ? house : '✖'}</p>
                            <p className="character__birth--detail">Year of Birth: {birth ? birth : '✖'}</p>
                            <p className="character__patronus--detail">Patronus: {patronus ? patronus : '✖'}</p>
                            <p className="character__status--detail">Status: {alive ? 'Alive 😊' : 'Deceased 😵'} </p>
                        </div>
                    </div>
                    <Link className="go__back" to="/"><span role="img" aria-label="Back">🔙</span> Mischief Managed</Link>
                </div>
            );
        } else {
            return (
                <Fragment>
                    <p>We could all have been killed - or worse, expelled</p>
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