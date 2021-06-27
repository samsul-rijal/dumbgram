import { useState } from 'react'
import '../css/Login.css'
import { Button, Modal, Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { API } from '../config/api'
import Login from './Login'

function ModalRegisterLogin(props) {
    const history = useHistory();

    const [ messageRegister, setMessageRegister ] = useState('')

    const [ formRegister, setFormRegister] = useState({
        email: '',
        username: '',
        password: '',
        fullname: ''
    })

    const { email, username, password, fullname} = formRegister

    const handleOnChangeRegister = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmitRegister = async (e) => {
        
        try {
            e.preventDefault()

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }


            const body = JSON.stringify({
                ...formRegister
            })

            const response = await API.post('/register', body, config)
            console.log(response)

            setMessageRegister(response.data.message)
            

            if(response.data.status === 'success') {
                setMessageRegister(response.data.message)
                alert('Register Successfull')
            }

            setFormRegister({
                email: '',
                username: '',
                password: '',
                fullname: ''
            })

        } catch (error) {
            console.log(error)
        }

    }

    const { show, nameModal, handleClose, handleChangeModal } = props;

    let modal = null;

    const handleChangeModalLogin = () => handleChangeModal('login');
    const handleChangeModalRegister = () => handleChangeModal('register');

    if (nameModal === 'login') {
        modal = (
            <Modal show={show} onHide={handleClose} animation={false}>
                <div className="bg-dark">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </div>

                <Modal.Body className="bg-dark">
                    <Login
                        handleClose={ handleClose }
                        handleChangeModalLogin={ handleChangeModalLogin }
                    />

                    <p className="title-login">Don't have account ? Klik <span className="here" onClick={handleChangeModalRegister}>Here</span></p>
                </Modal.Body>
            </Modal>
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
                        <Form onSubmit={ handleOnSubmitRegister }>

                            { messageRegister && 
                                <div class="alert alert-danger" role="alert">
                                    { messageRegister }
                                </div>
                            }

                            <Form.Group className="mb-3">
                                <input className="form-input" onChange={handleOnChangeRegister} value={email} name="email" type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <input className="form-input" onChange={handleOnChangeRegister} value={username} name="username" type="text" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <input className="form-input" onChange={handleOnChangeRegister} value={password} name="password" type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <input className="form-input" onChange={handleOnChangeRegister} value={fullname} name="fullname" type="fullname" placeholder="Full Name" />
                            </Form.Group>

                            <button className="btn-loginModal" type="submit">Register</button>

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
