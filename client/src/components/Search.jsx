import React, { useState } from 'react'
import products from '../data.json'
import '../styles/Search.css'

const Search = () => {
    const [result, setResult] = useState([])

    function filterSearch(e) {
        const query = e.target.value;
        // Create copy of item list
        var updatedList = [...products];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => item.Heading.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        // Trigger render with updated values
        setResult(updatedList);
    }
    console.log(result)
    return (
        <div className='searchCont'>
            <div className='searchMain'>
                <h1>Type here to search</h1>
                <input type="text" id='searchRes'
                    onChange={filterSearch}
                />
                <hr />
                <div className='searchResult'>
                    {result.map((i, index) => {
                        return <div className='result'>
                            <img src={i.img} className="resImg" />
                            <div>
                                <h3>{i.Heading}</h3>
                                <p>{i.text}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div id='one'>
                <div id='two'>
                    <div id='three'>
                        <div id='four'>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search