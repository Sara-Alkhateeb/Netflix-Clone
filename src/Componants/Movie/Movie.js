import React from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Movie(props) {

    const [showFlag,setShowFlag] = useState(false);

    const [clickedMovie, setClickedMovie] = useState({});
   
    const handleShow = (movie) =>{
        setShowFlag(true);
        setClickedMovie(movie);
    }

    const handleclose = () =>{
        setShowFlag(false);
    }

    

    return (
           <>
            <div key={props.movie.id}>
                    <Col>
                    <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movie.releaseDate}`} />
                            <Card.Body>
                                <Card.Title>{props.movie.Title}</Card.Title>
                                <Card.Text>
                                    {props.movie.posterPath}
                                    </Card.Text>

                                    <Card.Text>
                                    {props.movie.overview}
                                </Card.Text>
                                <Button variant="primary" style={{ backgroundColor: 'black' }} onClick={() => {handleShow(props.movie)}}>add to favourite</Button>
                            </Card.Body>
                        </Card>
                    </Col> </div>
                    
             <ModalMovie showFlag={showFlag} handleclose={handleclose} selectedMovie={clickedMovie}/> 
             </>
    );
}

export default Movie;