import {useState, useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ModalRegisterLogin from '../Components/ModalRegisterLogin'
import '../css/Home.css';
import '../css/Login.css';
import Dumbgram from '../img/Dumbgram.png'
import Image1 from '../img/Image1.png'
import Image2 from '../img/Image2.png'
import Image3 from '../img/Image3.png'
import Image4 from '../img/Image4.png'
import Image5 from '../img/Image5.png'
import Image6 from '../img/Image6.png'
import Image7 from '../img/Image7.png'
import Image8 from '../img/Image8.png'

function Home() {
    const [show, setShow] = useState(false);
    const [nameModal, setNameModal] = useState('');

    const handleModalLogin = () => {
        setShow(!show);
        setNameModal('login');
      }
    
      const handleModalRegister = () => {
        setShow(!show);
        setNameModal('register');
      }


    return (
        <div className='hero-container'>
          <ModalRegisterLogin show={ show } nameModal={ nameModal } handleClose={ setShow } handleChangeModal={ setNameModal } />

            <Container>
                <Row>
                    <Col lg={5}>
                        <div>
                            <img src={Dumbgram} alt="dumbgram" />
                            <div className="title">
                                <p>Share your best <br /> photos or videos</p>
                            </div>

                            <p className="desc-title">Join now, share your creations with another people and enjoy other creations.</p>
                            <ModalRegisterLogin />
                            <div className="button">
                                <button className="btn-login" onClick={handleModalLogin}>
                                    Login
                                </button>
                                
                                <button className="btn-register" onClick={handleModalRegister}>
                                    Register
                                </button>
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

export default Home
