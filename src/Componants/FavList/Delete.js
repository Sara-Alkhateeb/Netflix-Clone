import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Delete(props) {
    const [newMoviesArr, setNewMoviesArr] = useState([]);
    const sendReq = async (e) => {
        e.preventDefault();

        const serverURL = `${process.env.REACT_APP_serverURL}/delete/${props.movie.id}`;
        const response = await fetch(serverURL, {method :'DELETE'});
        const data = await response.json();
        setNewMoviesArr(data);
        props.setDeletedMovie(data)
    }



    return (
        <div>
            <Modal show={props.deleteFlag} onHide={props.closeDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete movie!</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={sendReq}>
                        <Button variant="primary" type="submit" onClick={props.closeDeleteModal} >
                            Yes
                        </Button>
                        <Button variant="secondary" onClick={props.closeDeleteModal}>
                            No
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeDeleteModal}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Delete;