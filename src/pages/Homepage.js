import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './../components/cards';
import { HEROKU_BYPASS_CORS, RICKY_API } from './../constants/constants';


export default function Homepage() {
    const [cards, setCards] = useState(undefined);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [isResultsFiltered, setIsResultsFiltered] = useState(false);


    useEffect(() => {
        axios.get(HEROKU_BYPASS_CORS + RICKY_API)
            .then((cardResults) => {
                setCards(cardResults.data.results);
            })
    }, [])


    const handleFiltering = (input) => {
        console.log(input.target.value);
        let filteredCards = cards.filter((value) => {
            return value.name.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setSearchPhrase(input.target.value)
        setFilteredResults(filteredCards)
        setIsResultsFiltered(true)
    }


    return (
        <>
            <div className="card-search-row">
                <h1 className="header">Rick & Morty</h1>
                <form className="search-card-container">
                    <input type='text'
                        name='searchPhrase'
                        onChange={handleFiltering}
                        className='form-card'
                    />
                </form>
            </div>

            <div className="card-row">
                {
                    (isResultsFiltered) ?

                        <div>
                            <h2>You searched for</h2>
                            {
                                (filteredResults.length > 0) ?
                                    filteredResults.map((value, index) => {
                                        return <Cards key={index}
                                            id={value.id}
                                            name={value.name}
                                            image={value.image}
                                        />

                                    }) :
                                    <div>No data for search</div>
                            }

                        </div> :

                        <>
                            {
                                (cards !== undefined) ?
                                    cards.map((value, index) => {
                                        return <Cards key={index}
                                            id={value.id}
                                            name={value.name}
                                            image={value.image}
                                        />
                                    }) :
                                    <div>No data</div>
                            }
                        </>
                }
            </div>
        </>
    );
}
