import '../css/Feed.css';
import {Navbar, Card, Row, Col} from 'react-bootstrap'
import Dumbgram from '../img/Dumbgram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignInAlt, faHome, faCompass } from '@fortawesome/free-solid-svg-icons';

import { useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../contexts/userContext'

const path = 'http://localhost:5000/uploads/'

function FeedProfile() {
    const [state, dispatch] = useContext(UserContext);
    // const [follows, setFollows] = useState({followers: 0, following: 0})

    console.log(state);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
    }

    return(
        <>
        { state.user &&
        <>

        <div className="feed-left">
            <Navbar className="img-bar">
                <Link to="/feed">
                    <img className="img-bar" src={Dumbgram} alt="dumbgram" />
                </Link>
            </Navbar>

            <Card className="bg-card text-center mt-3">
                <div className="icon-edit">
                    <Link to="/editprofile">
                        <FontAwesomeIcon className="ms-auto icon-edit me-5" icon={faEdit} />
                    </Link>
                </div>
                
                <Card.Body>
                    <Card.Text>
                        <div className="circle-profile">
                            <img src={ path + state.user.image } className="logo-profile" alt="logo" />
                        </div>
                    </Card.Text>

                    <h3 className="profile-name">
                        {state.user.fullname}
                    </h3>
                    <p className="email">{state.user.username}</p>

                    <Row className="mt-4 group-follow">
                        <Col lg={4}>
                            <p>Post</p>
                            <p className="post">{state.user.feed.length}</p>
                        </Col>
                        <Col lg={4} className="line-followers">
                            <p>Followers</p>
                            <p className="followers">{state.user.followers.length}</p>
                        </Col>
                        <Col lg={4}>
                            <p>Following</p>
                            <p className="following">{state.user.following.length}</p>
                        </Col>
                    </Row>

                </Card.Body>
                <p className="bio">bio : {state.user.bio}</p>
                
                <div className="menu">
                    <p> <Link to="/feed" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-feed" icon={faHome} /><span className="title-feed">Feed</span></Link></p>
                    <p> <Link to="/explore" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-3 icon-explore" icon={faCompass} /><span className="title-explore">Explore</span></Link></p>
                </div>

                <div className="logout">
                    <p> <Link to="/" className="title-feed-a"> <FontAwesomeIcon className="ms-auto me-3 icon-logout" icon={faSignInAlt} /><span onClick={handleLogout} className="title-logout">Logout</span></Link></p>
                </div>
                
            </Card>
        </div>
        </>
        }
        </>
    )
}

export default FeedProfile