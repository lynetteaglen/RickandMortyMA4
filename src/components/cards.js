import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    const { image, name, id } = props;
    return (
        <div className="card-container">
            <div className="card">
                <img src={image} alt="rick and morty" className="card-image" />
                <h2>{name}</h2>
                <Link to={`/card-specific/${id}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>
    )
}
export default Cards; 