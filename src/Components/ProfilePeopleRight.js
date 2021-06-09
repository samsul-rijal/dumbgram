import React from 'react'
import '../css/Feed.css';
import { Container, Navbar, InputGroup, FormControl, Button, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faHeart, faComment  } from '@fortawesome/free-solid-svg-icons';
import EllipseIcon from '../img/EllipseIcon.png'
import Image1 from '../img/Image1.png'
import Image2 from '../img/Image2.png'
import Image7 from '../img/Image7.png'

function ProfilePeopleRight() {
    return(
        <div>
            <Navbar fixed="top" className="navbar-right-feed">
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="search-feed" placeholder="Search" />
                    <p className="title-feed-right">Zayn, Feed</p>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        {/* <Notifikasi /> */}
                        <a href="#"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></a>
                        <Navbar.Text>
                            <a href="#">
                                <Button className="button-post"><span className="plus"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></Button>
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="masoryholder" data-aos="fade-up">
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Image1} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="/profileexplore" className="card-box-profile">
                                        <img src={EllipseIcon} className="card-profile" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Image2} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="/profileexplore" className="card-box-profile">
                                        <img src={EllipseIcon} className="card-profile" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Image7} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={EllipseIcon} className="card-profile" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
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