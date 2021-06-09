import React from 'react'
import {useState} from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import '../css/Home.css';
import Dumbgram from '../img/Dumbgram.png'
import Image1 from '../img/Image1.png'
import Image2 from '../img/Image2.png'
import Image3 from '../img/Image3.png'
import Image4 from '../img/Image4.png'
import Image5 from '../img/Image5.png'
import Image6 from '../img/Image6.png'
import Image7 from '../img/Image7.png'
import Image8 from '../img/Image8.png'
import Login from '../Components/Login'
import Register from '../Components/Register'
import ModalLogin from '../Components/ModalLogin'
import ModalRegister from '../Components/ModalRegister'

function LandingPage() {
    const [modalShowLogin, setModalShowLogin] = React.useState(false);
    const [modalShowRegister, setModalShowRegister] = React.useState(false);

    return (
        <div className='hero-container'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div>
                            <img src={Dumbgram} alt="dumbgram" />
                            <div className="title">
                                <p>Share your best <br /> photos or videos</p>
                            </div>

                            <p className="kidstitle">Join now, share your creations with another people and enjoy other creations.</p>

                            <div className="button">
                                <button className="btn-login" onClick={() => setModalShowLogin(true)}>
                                Login
                                </button>
                                
                                <button className="btn-register" onClick={() => setModalShowRegister(true)}>
                                    Register
                                </button>

                                <ModalLogin
                                show={modalShowLogin}
                                onHide={() => setModalShowLogin(false)}
                                />
                        
                                <ModalRegister
                                show={modalShowRegister}
                                onHide={() => setModalShowRegister(false)}
                                />
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <Row>
                            <Col lg={4} style={{width: "31%"}}>
                                <img  className="mb-2"  src={Image1} alt="Image1" />
                                <img  className="mb-2"  src={Image2} alt="Image2" />
                                <img  className="mb-2"  src={Image3} alt="Image3" />
                            </Col>
                            <Col lg={4} style={{width: "31%"}}>
                                <img  className="mb-2"  src={Image4} alt="Image4" />
                                <img  className="mb-2"  src={Image5} alt="Image5" />
                            </Col>
                            <Col lg={4} style={{width: "31%"}}>
                                <img  className="mb-2"  src={Image6} alt="Image6" />
                                <img  className="mb-2"  src={Image7} alt="Image7" />
                                <img  className="mb-2"  src={Image8} alt="Image8" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
