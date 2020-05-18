import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
require('./index.scss');

const Detail = ({
    filterResults,
    charId,
    match,
    image,
    name,
    house,
    birth,
    patronus,
    alive }) => {
    // const charId = !!match.params.id;

    function handleHouse(hogwarts) {
        if ((hogwarts) === 'Gryffindor') {
            return 'Gryffindor 🦁'
        } else if ((hogwarts) === 'Slytherin') {
            return 'Slytherin 🐍'
        } else if ((hogwarts) === 'Ravenclaw') {
            return 'Ravenclaw 🦅'
        } else if ((hogwarts) === 'Hufflepuff') {
            return 'Hufflepuff 🐿'
        } else {
            return '✖'
        }
    }

    return (
        <div className={'detail'}>
            {filterResults.length > 0 && filterResults.length > charId
                ? <div className={'detail__wrapper'}>
                    <img className={'detail-image'} src={image} alt={name} />
                    <div className={'detail-info'}>
                        <h2 className={''}>{name}</h2>
                        <p className={''}>House: {handleHouse(house)}</p>
                        <p className={''}>Year of Birth: {birth ? birth : '✖'}</p>
                        <p className={''}>Patronus: {patronus ? patronus : '✖'}</p>
                        <p className={''}>Status: {alive ? 'Alive 😊' : 'Deceased 😵'} </p>
                    </div>
                </div>
                : <div className={'detail__not-found'}>
                    <p>We could all have been killed - or worse, expelled</p>
                </div>
            }
            <Link className={'go__back'} to="/"><span role="img" aria-label="Back">🔙</span> Mischief Managed</Link>
            <Link to="/">Mischief Managed</Link>
        </div>
    )
}

Detail.propTypes = {
    filterCharResults: PropTypes.arrayOf(PropTypes.object),
    charId: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired
};


export default Detail;