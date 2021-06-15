import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ModalRegisterLogin(props) {
    const { show, nameModal, handleClose, handleChangeModal } = props;

    let modal = null;

    const handleChangeModalLogin = () => handleChangeModal('login');
    const handleChangeModalRegister = () => handleChangeModal('register');

    if (nameModal === 'login') {
            modal = (
            <div>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <div className="bg-dark">
                        <Modal.Title id="contained-modal-title-vcenter">
                            Login
                        </Modal.Title>
                    </div>

                    <Modal.Body className="bg-dark">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <input className="form-input" type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <input className="form-input" type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>

                        <Link to="/feed">
                            <Button className="btn-loginModal">Login</Button>
                        </Link>
                        <p className="title-login">Don't have account ? Klik <span className="here" onClick={handleChangeModalRegister}>Here</span></p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    if (nameModal === 'register') {
        modal = (
            <div>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <div className="bg-dark">
                        <Modal.Title id="contained-modal-title-vcenter">
                            Register
                        </Modal.Title>
                    </div>

                    <Modal.Body className="bg-dark">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <input className="form-input" type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <input className="form-input" type="email" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <input className="form-input" type="email" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <input className="form-input" type="password" placeholder="Password" />
                            </Form.Group>

                            <Link to="/feed">
                                <Button className="btn-loginModal">Register</Button>
                            </Link>
                            <p className="title-login">Already have an account ?  Klik <span className="here" onClick={handleChangeModalLogin}>Here</span></p>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    return modal;
}

export default ModalRegisterLogin
