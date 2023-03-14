import React from 'react';
import { useEffect, useState } from "react";
import Movie from '../Movie/Movie'
import Row from 'react-bootstrap/Row';


function MovieList() {
    const [moviesArr, setMoviesArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `https://movies-library-bqib9wri1-sara-alkhateeb.vercel.app/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setMoviesArr(data);
    }

    useEffect(() => {
        sendReq();
    }, [])


    return (<>
     <Row xs={1} md={4} className="g-4">
  {moviesArr.map( (item) => {return (< Movie movie= {item} />) })}
  </Row>
  </>
      
    );
}



export default MovieList;