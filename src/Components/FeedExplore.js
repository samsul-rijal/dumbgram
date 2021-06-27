import React from 'react'
import '../css/Explore.css';
import '../css/Feed.css';
import { useState } from 'react';
import { Container, Navbar, InputGroup, FormControl, Button, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faBell  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Image1 from '../img/Image1.png'
import Image2 from '../img/Image2.png'
import Image3 from '../img/Image3.png'
import Image4 from '../img/Image4.png'
import Image7 from '../img/Image7.png'
import Image9 from '../img/Image9.png'
import Notifikasi from '../Components/Notifikasi'
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/userContext'
import { API } from '../config/api'

function FeedExplore() {
    const [showNotif, setShowNotif] = useState(false);	

	const handleShowNotif = () => setShowNotif(!showNotif);


    const path = 'http://localhost:5000/uploads/'

    const [state, dispatch] = useContext(UserContext);
    console.log(state)

    const [ getFeed, setGetFeed ] = useState([])

    useEffect( async () => {
        try {
            const getAllFeed = await API.get('/feeds')
            console.log(getAllFeed)

            setGetFeed(getAllFeed.data.data.feeds)

        } catch (error) {
            console.log(error.response)

        }
    },[])

    return(
        <div>
            <Navbar fixed="top" className="navbar-right-feed">
			<Notifikasi show={ showNotif } handleClose={ setShowNotif } />
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <input className="search-feed" placeholder="Search" />
                    <p className="title-feed-right">Explore</p>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <FontAwesomeIcon className="icon-Notifikasi" icon={faBell} onClick={ handleShowNotif } />
                        <Link to="/message"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></Link>
                        <Navbar.Text>
                            <Link to="/createpost">
                                <button className="button-post"><span className="plus"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></button>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="card-head">
            { getFeed.map((f) => (
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-feed">
                        <Card.Img variant="top" className="img-explore" src={path + f.fileName} />
                    </Card>
                </Col>
            ))}




                {/* <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-explore">
                        <Card.Img variant="top" className="img-explore" src={Image9} />
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-explore">
                        <Card.Img variant="top" className="img-explore" src={Image3} />
                    </Card>
                </Col>
                
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-explore">
                        <Card.Img variant="top" className="img-explore" src={Image4} />
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-explore">
                        <Card.Img variant="top" className="img-explore" src={Image7} />
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="card-explore">
                        <Card.Img variant="top" className="img-explore" src={Image2} />
                    </Card>
                </Col> */}
            </div>
        </div>
    )
}

export default FeedExplore
