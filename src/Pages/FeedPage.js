import React from 'react'
import '../css/FeedPage.css';
import {Row, Col} from 'react-bootstrap'
import FeedProfile from '../Components/FeedProfile'
import FeedRight from '../Components/FeedRight';

function FeedPage() {
    return(
        <div>
            <Row>
                <Col lg={4} className="feed-profile" fixed="top">
                    <FeedProfile />
                </Col>

                <Col lg={8} className="feed-right">
                    <FeedRight />
                </Col>
            </Row>
        </div>
    )
}

export default FeedPage