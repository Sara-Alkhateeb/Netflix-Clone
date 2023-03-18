import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Update(props) {

    const updateComment = async (e) =>{
        e.preventDefault();
        const obj = {
            comment : e.target.comment.value
        }

        console.log(obj.comment);

        console.log(props.movie.id);

        const serverURl = `${process.env.REACT_APP_serverURL}/update/${props.movie.id}`
        console.log (serverURl);
        const axiosRes = await axios.put(serverURl,obj);
        console.log(axiosRes.data);
        //close the update modal
        props.closeUpdateModal();
        props.setUpdatedMovie(axiosRes.data)
    
    }
    return (
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateComment}>

                    <Form.Group className="mb-3">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="comment" type="text" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={props.closeUpdateModal}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeUpdateModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Update;