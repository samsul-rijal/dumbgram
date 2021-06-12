import React from 'react'
import '../css/MessageLeft.css';
import {Row, Col} from 'react-bootstrap'
import MessageLeft from '../Components/MessageLeft'
import MessageRight from '../Components/MessageRight'

function MessagePage() {
    return (
        <div>
            <Row>
                <Col lg={4} className="message-Left">
                    <MessageLeft />
                </Col>

                <Col lg={8} className="feed-right">
                    <MessageRight />
                </Col>
            </Row>
        </div>
    )
}

export default MessagePage
