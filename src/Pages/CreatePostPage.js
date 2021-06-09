import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FeedProfile from '../Components/FeedProfile'
import CreatePost from '../Components/CreatePost'

function CreatePostPage() {
    return (
        <div>
            <Row>
                <Col lg={4} className="feed-profile" fixed="top">
                    <FeedProfile />
                </Col>

                <Col lg={8} className="feed-right">
                    <CreatePost />
                </Col>
            </Row>
        </div>
    )
}

export default CreatePostPage
