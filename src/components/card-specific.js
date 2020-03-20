import React from 'react';

const CardInSpecific = (props) => {
    const { name, status, species, gender, image } = props;

    return (
        <div className="container-cardSpecific">
            <div>
                <h1 className="specific_header">More about {name}</h1>
                <div className="specific_card">
                    <img src={image} alt="rick and morty" className="specific_image" />
                    <h3>Status: {status}</h3>
                    <h3>Specie: {species}</h3>
                    <h3>Gender: {gender}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardInSpecific;

