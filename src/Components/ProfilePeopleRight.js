import React from 'react'
import '../css/Feed.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Navbar, InputGroup, FormControl, Button, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faHeart, faComment, faBell  } from '@fortawesome/free-solid-svg-icons';
import Notifikasi from '../Components/Notifikasi'
import EllipseIcon from '../img/EllipseIcon.png'
import Image1 from '../img/Image1.png'
import Image2 from '../img/Image2.png'
import Image3 from '../img/Image3.png'
import Image4 from '../img/Image4.png'
import Image7 from '../img/Image7.png'
import Image9 from '../img/Image9.png'

function ProfilePeopleRight() {
    const [showNotif, setShowNotif] = useState(false);	

	const handleShowNotif = () => setShowNotif(!showNotif);
    return(
        <div>
            <Navbar fixed="top" className="navbar-right-feed">
			<Notifikasi show={ showNotif } handleClose={ setShowNotif } />
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="search-feed" placeholder="Search" />
                    <p className="title-feed-right">Zayn, Feed</p>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <FontAwesomeIcon className="icon-Notifikasi" icon={faBell} onClick={ handleShowNotif } />
                        <Link to="#"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></Link>
                        <Navbar.Text>
                            <Link to="/createpost">
                                <Button className="button-post"><span className="plus"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></Button>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="card-head">
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-feed" src={Image1} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Link to="/profileexplore">
                                        <Navbar.Brand className="card-box-profile">
                                            <img src={EllipseIcon} className="card-profile" alt="logo" />
                                        </Navbar.Brand>
                                    </Link>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="name-post">zayn</p>
                            </Card.Text>
                            <Navbar className="nav-like">
                                <Navbar.Text className="ms-auto">
                                    <p className="num-like">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={2}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-feed" src={Image9} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Link to="/profileexplore">
                                        <Navbar.Brand className="card-box-profile">
                                            <img src={EllipseIcon} className="card-profile" alt="logo" />
                                        </Navbar.Brand>
                                    </Link>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="name-post">zayn</p>
                            </Card.Text>
                            <Navbar className="nav-like">
                                <Navbar.Text className="ms-auto">
                                    <p className="num-like">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-feed" src={Image3} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Link to="/profileexplore">
                                        <Navbar.Brand className="card-box-profile">
                                            <img src={EllipseIcon} className="card-profile" alt="logo" />
                                        </Navbar.Brand>
                                    </Link>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="name-post">zayn</p>
                            </Card.Text>
                            <Navbar className="nav-like">
                                <Navbar.Text className="ms-auto">
                                    <p className="num-like">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-feed" src={Image4} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Link to="/profileexplore">
                                        <Navbar.Brand className="card-box-profile">
                                            <img src={EllipseIcon} className="card-profile" alt="logo" />
                                        </Navbar.Brand>
                                    </Link>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="name-post">zayn</p>
                            </Card.Text>
                            <Navbar className="nav-like">
                                <Navbar.Text className="ms-auto">
                                    <p className="num-like">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-feed" src={Image7} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Link to="/profileexplore">
                                        <Navbar.Brand className="card-box-profile">
                                            <img src={EllipseIcon} className="card-profile" alt="logo" />
                                        </Navbar.Brand>
                                    </Link>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="name-post">zayn</p>
                            </Card.Text>
                            <Navbar className="nav-like">
                                <Navbar.Text className="ms-auto">
                                    <p className="num-like">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-feed" src={Image2} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Link to="/profileexplore">
                                        <Navbar.Brand className="card-box-profile">
                                            <img src={EllipseIcon} className="card-profile" alt="logo" />
                                        </Navbar.Brand>
                                    </Link>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="name-post">zayn</p>
                            </Card.Text>
                            <Navbar className="nav-like">
                                <Navbar.Text className="ms-auto">
                                    <p className="num-like">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </div>

        </div>
        
    )
}

export default ProfilePeopleRight