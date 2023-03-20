import React from 'react';
import NavBar from '../NavBar/NavBar';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Update from './Update';
import './FavList.css';
import Delete from './Delete';


function FavList() {
    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getMovies`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setFavArr(data);

    }

    useEffect(() => {
        sendReq();
    }, [])

    const [updateFlag, setUpdateFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const showUpdateModal = (item) => {
        setUpdateFlag(true);
        setClickedMovie(item);

    }

    const closeUpdateModal = () => {
        setUpdateFlag(false);
    }


    const [deleteFlag, setDeleteFlag] = useState(false);

    const showDeleteModal = (item) => {
        setDeleteFlag(true);
        setClickedMovie(item);

    }

    const closeDeleteModal = () => {
        setDeleteFlag(false);
    }

    const setDeletedMovie = (arr) => {
        setFavArr(arr)
    }
    const setUpdatedMovie = (arr) => {
        setFavArr(arr)
    }

    return (
        <>
            <NavBar />
            <Row xs={1} md={2} className="g-4" id='favlist'>
                {favArr.map((movie) => {
                    // console.log(movie);
                    // console.log(movie.comment);
                    return (<div key={movie.id}>
                        <Col>
                            <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.posterpath}`} alt={`https://image.tmdb.org/t/p/original${movie.posterPath}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.releasedate}
                                    </Card.Text>

                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>

                                    <Card.Text>
                                        {movie.comment}
                                    </Card.Text>
                                    <Button variant="success" onClick={() => { showUpdateModal(movie) }}>Update comment</Button>
                                    <Button variant="danger" onClick={() => { showDeleteModal(movie) }} >Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col> </div>)
                })}
            </Row>
            <Update closeUpdateModal={closeUpdateModal} updateFlag={updateFlag} movie={clickedMovie} setUpdatedMovie={setUpdatedMovie} />
            <Delete closeDeleteModal={closeDeleteModal} deleteFlag={deleteFlag} movie={clickedMovie} setDeletedMovie={setDeletedMovie} />
        </>
    );
}

export default FavList;