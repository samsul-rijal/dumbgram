import React from 'react'
import '../css/Feed.css';
import {Navbar, Card, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Dumbgram from '../img/Dumbgram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHome, faCompass } from '@fortawesome/free-solid-svg-icons';
import Ellipse2 from '../img/Ellipse2.png'

function ProfilePeople() {
    return (
        <div className="feed-left">
            <Navbar className="img-bar">
                <a href="/">
                    <img className="img-bar" src={Dumbgram} alt="dumbgram" />
                </a>
            </Navbar>

            <Card className="bg-card text-center mt-3">          
                <Card.Body>
                    <Card.Text>
                        <div className="circle-profile">
                            <img src={Ellipse2} className="logo-profile" alt="logo" />
                        </div>
                    </Card.Text>

                    <h3 className="profile-name">Zayn Malik</h3>
                    <p className="email">@zayn</p>

                    <div className="button-profile">
                        <button className="btn-message">
                        Message
                        </button>
                        
                        <button className="btn-unfollow">
                            Unfollow
                        </button>
                    </div>

                    <Row className="mt-4 group-follow">
                        <Col lg={4}>
                            <p>Posts</p>
                            <p className="post">143</p>
                        </Col>
                        <Col lg={4} className="line-followers">
                            <p>Followers</p>
                            <p className="followers">40.5 M</p>
                        </Col>
                        <Col lg={4}>
                            <p>Following</p>
                            <p className="following">28</p>
                        </Col>
                    </Row>

                </Card.Body>
                <p className="title-desc">Nobody is Listening Out Now! <br /> www.inzayn.com</p>
                
                <div className="menu">
                    <p> <Link to="/feed" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-feed" icon={faHome} /><span className="title-feed">Feed</span></Link></p>
                    <p> <Link to="/explore" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-explore" icon={faCompass} /><span className="title-explore">Explore</span></Link></p>
                </div>

                <div className="logout">
                    <p><Link href="/" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-logout" icon={faSignInAlt} /><span className="title-logout">Logout</span></Link></p>
                </div>
                
            </Card>
        </div>
    )
}

export default ProfilePeople
