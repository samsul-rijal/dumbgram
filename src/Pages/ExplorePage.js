import React from 'react'
import '../css/FeedPage.css';
import {Row, Col} from 'react-bootstrap'
import FeedProfile from '../Components/FeedProfile'
import FeedExplore from '../Components/FeedExplore';

function FeedPage() {
    return(
        <div>
            <Row>
                <Col lg={4} className="feed-profile">
                    <FeedProfile />
                </Col>

                <Col lg={8} className="feed-right">
                    <FeedExplore />
                </Col>
            </Row>
        </div>
    )
}

export default FeedPage