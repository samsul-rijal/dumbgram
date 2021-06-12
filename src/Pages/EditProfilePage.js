import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FeedProfile from '../Components/FeedProfile'
import EditProfile from '../Components/EditProfile'

function EditProfilePage() {
    return (
        <div>
            <Row>
                <Col lg={4} className="feed-profile" fixed="top">
                    <FeedProfile />
                </Col>

                <Col lg={8} className="feed-right">
                    <EditProfile />
                </Col>
            </Row>
        </div>
    )
}

export default EditProfilePage
