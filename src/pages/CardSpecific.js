import React, { useState, useEffect } from 'react';
import CardInSpecific from './../components/card-specific';
import axios from 'axios';
import { HEROKU_BYPASS_CORS, RICKY_API } from './../constants/constants';

export default function CardSpecific({ match: { params: { id } } }) {
    const [cardResults, setCardResults] = useState(undefined);

    useEffect(() => {
        axios.get(HEROKU_BYPASS_CORS + RICKY_API + id)
            .then(result => {
                setCardResults(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <>
            <div>
                {
                    (cardResults !== undefined) ?

                        <CardInSpecific
                            name={cardResults.name}
                            image={cardResults.image}
                            status={cardResults.status}
                            species={cardResults.species}
                            gender={cardResults.gender}
                        /> :
                        <div>No data</div>
                }
            </div>
        </>
    )
}