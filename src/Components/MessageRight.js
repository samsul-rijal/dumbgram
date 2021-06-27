import React from 'react'
import '../css/Feed.css';
import '../css/MessageLeft.css';
import { useState } from 'react';
import { Container, Navbar, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import Notifikasi from '../Components/Notifikasi'

function MessageRight() {
    const [showNotif, setShowNotif] = useState(false);	

	const handleShowNotif = () => setShowNotif(!showNotif);
    return(
        <div>
            <Navbar fixed="top" className="navbar-right-feed">
			<Notifikasi show={ showNotif } handleClose={ setShowNotif } />
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <input className="search-feed" placeholder="Search" />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <FontAwesomeIcon className="icon-Notifikasi" icon={faBell} onClick={ handleShowNotif } />
                        <Link to="/message"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></Link>
                        <Navbar.Text>
                            <Link to="/createpost">
                                <button className="button-post"><span className="plus"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></button>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <p className="no-message">No Message</p>
        </div>
    )
}

export default MessageRight
