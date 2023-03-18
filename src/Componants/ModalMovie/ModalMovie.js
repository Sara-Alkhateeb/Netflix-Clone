import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { Form } from 'react-bootstrap';

function ModalMovie(props) {
  const [comment, setComment] = useState('');

  const handlecomment = (event) => { setComment(event.target.value); }
  const postRes = async () => {
    
    console.log(comment);

    await fetch(`${process.env.REACT_APP_serverURL}/addMovie`,
      {
        method: 'POST',
        body: JSON.stringify(
          {
            title : props.selectedMovie.title ? props.selectedMovie.title  : "Title",
            releaseDate: props.selectedMovie.posterPath,
            posterPath: props.selectedMovie.releaseDate,
            overview: props.selectedMovie.overview,
            comment: comment
          }), headers: { 'Content-type': 'application/json; charset=UTF-8', },
      }
      )
      console.log(comment);
   }

  const style2={backgroundColor: 'black'}
  const style3={display:'flex'}
  const style1={gap: '10px'}

  return (
    <Modal style={{ ...style2 }} show={props.showFlag} onHide={props.handleclose}>
      <Modal.Header style={{ backgroundColor: 'gray' }} closeButton>
        <Modal.Title style={{ color: 'black' }}>{props.selectedMovie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'gray' }}>
        <div style={{ ...style1, ...style3 }}>
          <Image height={'560px'} src={`https://image.tmdb.org/t/p/w500${props.selectedMovie.releaseDate}`} width='50%'></Image>
          <Modal.Title style={{ fontSize: '15px' }}>
            {props.selectedMovie.overview}
          </Modal.Title>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ fontSize: '30px' }}>Add comment</Form.Label>
            <Form.Control as="textarea" onChange={handlecomment} rows={3} />
          </Form.Group>
        </div>

      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'gray' }} >
        <Button variant="secondary" onClick={props.handleclose}>
          Close
        </Button>
        <Button variant="primary" style={{ backgroundColor: 'gray' }} onClick={() => {
          alert('your comment Added !')
          postRes();

        }}>
          add to favorite
        </Button>
      </Modal.Footer>
    </Modal>

  );
}


export default ModalMovie;