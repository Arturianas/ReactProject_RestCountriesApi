import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";


const Filter = () => {
    const [apiData, setApiData] = useState([]);
    
    const [resourceType, setResourceType] = useState('all');

    const API_URL = `https://restcountries.com/v3.1`;
    useEffect(() => {
        axios.get(`${API_URL}/${resourceType}`)
  .then((getData) => {
    // handle success
    //console.log(getData.data);
    setApiData(getData.data)
  })
    }, [resourceType])


    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if(searchInput !== '') {
            apiData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
    
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(apiData)
        }
        
        
        
    }

    const filteredData = apiData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        });

        //console.log(filteredData)


        const [filteredResults, setFilteredResults] = useState([]);


        return <div>


<div className='buttonsWithRegions'>
            <button onClick={() => setResourceType('all')}>All</button>
            <button onClick={() => setResourceType('region/europe')}>Europe</button>
            <button onClick={() => setResourceType('region/africa')}>Africa</button>
            <button onClick={() => setResourceType('region/americas')}>America</button>
            <button onClick={() => setResourceType('region/asia')}>Asia</button>
            <button onClick={() => setResourceType('region/Oceania')}>Oceania</button>
            
            
        </div>


                <div className='inputBG'>
                    <h3 className='inputTitle'>Search by Country</h3>
                    <input className='input'
                    icon='search'
                            placeholder='Search...'
                            onChange={(e) => searchItems(e.target.value)}
                    />
                </div>
                
                <div className='flexContainer'>
                    {searchInput.length > 1 ? (
                        filteredResults.map((data, index) => {
                            return (
                                <div className='flex'>
                                    <div className='countriesFiltered' key={index}>
                                        <img src={data.flags.png}/>
                                        <div className='countriesPadding'>
                                            <div className='name'>{data.name.common}</div>
                                            <p>{data.region}</p>
                                            <Link className='CountriesLink' to={`/countries/${data.name.common}`} >Learn more</Link>
                                        </div>
                                        
                                    </div>
                                </div>

                            )
                        })
                    ) : (
                        apiData.map((data, index) => {
                            return (
                                <div className='flex'>
                                    <div className='countriesFiltered' key={index}>
                                        <img src={data.flags.png}/>
                                        <div className='countriesPadding'>
                                            <div className='name'>{data.name.common}</div>
                                            <p>{data.region}</p>
                                            <Link className='CountriesLink' to={`/countries/${data.name.common}`} >Learn more</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            )
                        })
                    )}
                </div>
                
                        
            </div>;

    
    
};

export default Filter;

