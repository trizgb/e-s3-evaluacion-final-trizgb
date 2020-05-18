import * as React from 'react';
import PropTypes from 'prop-types';
require('./index.scss');

const Card = ({ image, title, subtitle }) => {
    return (
        <div className={"card"}>
            <img className={'card-image'} src={image} alt={title} />
            <h2 className={"card-title"}>{title}</h2>
            <p className={"card-subtitle"}>{subtitle ? subtitle : '✖'}</p>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Card;