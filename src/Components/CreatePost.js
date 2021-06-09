import React from 'react'
import '../css/Feed.css';
import { Container, Navbar, InputGroup, FormControl, Button, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faHeart, faComment  } from '@fortawesome/free-solid-svg-icons';

function CreatePost() {
    return(
        <div>
            <Navbar fixed="top" className="navbar-right-feed">
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="search-feed" placeholder="Search" />
                    <p className="title-feed-right">Create Post</p>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        {/* <Notifikasi /> */}
                        <a href="#"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></a>
                        <Navbar.Text>
                            <a href="/createpost">
                                <Button className="button-post"><span className="plus"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></Button>
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="button-upload">
                <button className="btn-login">
                    Upload Photos or Video
                </button>
                <FormControl className="caption" placeholder="Caption" />
                
            </div>
        </div>
        
    )
}

export default CreatePost