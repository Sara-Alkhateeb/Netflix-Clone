import React from 'react';
import { useEffect, useState } from "react";
import Movie from '../Movie/Movie'
import Row from 'react-bootstrap/Row';
import FavList from '../FavList/FavList';


function MovieList() {
    const [moviesArr, setMoviesArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setMoviesArr(data);
    }

    useEffect(() => {
        sendReq();
    }, [])


    return (<>
     <Row xs={1} md={4} className="g-4">
  {moviesArr.map( (item)  => 
   { 
    return (< Movie key={item.id} movie= {item} />) })
    }

  </Row>
  </>
      
    );
}



export default MovieList;