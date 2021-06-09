import React from 'react'
import '../css/Feed.css';
import {Navbar, Card, Row, Col} from 'react-bootstrap'
import Dumbgram from '../img/Dumbgram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignInAlt, faHome, faCompass } from '@fortawesome/free-solid-svg-icons';
import Ellipse1 from '../img/Ellipse1.png'


function FeedProfile() {
    return(
        <div className="feed-left">
            <Navbar className="img-bar">
                <a href="/">
                    <img className="img-bar" src={Dumbgram} alt="dumbgram" />
                </a>
            </Navbar>

            <Card className="bg-card text-center mt-3">
                <div className="icon-edit">
                    <a href="#">
                        <FontAwesomeIcon className="ms-auto icon-edit me-5" icon={faEdit} />
                    </a>
                </div>
                
                <Card.Body>
                    <Card.Text>
                        <div className="circle-profile">
                            <img src={Ellipse1} className="logo-profile" alt="logo" />
                        </div>
                    </Card.Text>

                    <h3 className="profile-name">Lisa</h3>
                    <p className="email">@alalisa_m</p>

                    <Row className="mt-4 group-follow">
                        <Col lg={4}>
                            <p>Post</p>
                            <p className="post">200</p>
                        </Col>
                        <Col lg={4} className="line-followers">
                            <p>Followers</p>
                            <p className="followers">51.2 M</p>
                        </Col>
                        <Col lg={4}>
                            <p>Following</p>
                            <p className="following">1</p>
                        </Col>
                    </Row>

                </Card.Body>
                <p className="bio">Rapper in Black Pink, Brand Ambasador Penshoppe</p>
                
                <div className="menu">
                    <p> <a href="/feed" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-feed" icon={faHome} /><span className="title-feed">Feed</span></a></p>
                    <p> <a href="/explore" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-explore" icon={faCompass} /><span className="title-explore">Explore</span></a></p>
                </div>

                <div className="logout">
                    <p><a href="/" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-logout" icon={faSignInAlt} /><span className="title-logout">Logout</span></a></p>
                </div>
                
            </Card>
        </div>
    )
}

export default FeedProfile