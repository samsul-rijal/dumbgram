import React from 'react'
import '../css/FeedPage.css';
import {Row, Col} from 'react-bootstrap'
import ProfilePeople from '../Components/ProfilePeople'
import ProfilePeopleRight from '../Components/ProfilePeopleRight';

function FeedProfilePeople() {
    return(
        <div>
            <Row>
                <Col lg={4} className="feed-profile" fixed="top">
                    <ProfilePeople />
                </Col>

                <Col lg={8} className="feed-right">
                    <ProfilePeopleRight />
                </Col>
            </Row>
        </div>
    )
}

export default FeedProfilePeople