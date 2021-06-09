import React from 'react'
import { Modal, Button, Form} from 'react-bootstrap'


function ModalRegister(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            Register
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="bg-dark">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="form-input" type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="form-input" type="email" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="form-input" type="email" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="form-input" type="password" placeholder="Password" />
            </Form.Group>

            <Button className="btn-loginModal" onClick={props.onHide}>Register</Button>
            <p className="title-login">Already have an account ?  Klik <a href="#">Here</a></p>
        </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
  
 export default ModalRegister