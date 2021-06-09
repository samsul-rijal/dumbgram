import React from 'react'
import { Modal, Button, Form} from 'react-bootstrap'


function ModalLogin(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="bg-dark">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="form-input" type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="form-input" type="password" placeholder="Password" />
            </Form.Group>
        </Form>

        <Button className="btn-loginModal" href="/feed">Login</Button>
        <p className="title-login">Don't have account ? Klik <a href="#">Here</a></p>
        </Modal.Body>
      </Modal>
    );
  }

  
  
 export default ModalLogin