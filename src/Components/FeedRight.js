import React from 'react'
import '../css/Feed.css';
import { useState } from 'react';
import { Container, Navbar, InputGroup, FormControl, Button, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faHeart, faComment, faBell } from '@fortawesome/free-solid-svg-icons';
import EllipseIcon from '../img/EllipseIcon.png'
import Image1 from '../img/Image1.png'
import Image2 from '../img/Image2.png'
import Image7 from '../img/Image7.png'
import Notifikasi from '../Components/Notifikasi'

function FeedRight(props) {
    const { titleNav } = props;
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
                    <p className="title-feed-right">Feed</p>
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

            <div className="masoryholder">
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

export default FeedRight