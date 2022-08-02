import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const Country = () => {

    const [apiData, setApiData] = useState([]);
    const {name} = useParams()

    const API_URL = `https://restcountries.com/v3.1`;
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
  .then((getData) => {
    // handle success
    //console.log(getData.data);
    setApiData(getData.data)
  })
    }, []);

    {console.log('Have a great day!')}

  return <div className="countryDiv">
     <section>
     <Link className="goBack" to="/" >Go back</Link>
         
          {apiData.map((data) => {
              
             
              return (
                  <div className="container">
                      <div className="countryAndFlag">
                            <h1>{data.name.common}</h1>
                            
                            <img src={data.flags.png} alt=""/>
                            <p>Borders:</p>
                            <div className="bordersFlex">
                            {
                                data.borders? data.borders.map((border, index) =>{
                                    return(
                                        <ul  key={index}>
                                            <li className="border">{border}</li>
                                        </ul>
                                    )
                                }):'Country does not have borders'
                            }
                            </div>
                            
                      </div>
                      
                      {
                          /* bug
                          <h2>languages: {data.languages}</h2>
                      <h2>borders: {data.borders}</h2> 
                      */
                      }
                      <div className="infoAboutCountry">
                            <div className="info">
                                <p>Population: <span>{data.population}</span></p>
                                <p>Area: <span>{data.area}</span></p>
                                


                            

                                



                            <div className="bordersFlex">
                                <p>Currency: <span>{
                                data.currencies? Object.keys(data.currencies).map(
                                    key => {
                                        return (
                                            <div>
                                                <div>{data.currencies[key].name}</div>
                                                
                                                
                                            </div>
                                            
                                        )
                                    }
                                ):'Country does not have currency'
                            }</span></p>
                            
                            </div>







                                

                                <p>Languages: <span>{Object.keys(data.languages).map(
                                    key => {
                                        return (
                                            <div>
                                                <div>{data.languages[key]}</div>
                                                
                                            </div>
                                            
                                        )
                                    }
                                 )}</span></p>


                            </div>
                      </div>
                      
                      
                      
                      

                    
                    
                      
                      
                      
                  </div>
                  
              )
          })}
      </section>
  </div>;
};

export default Country;
