import React from 'react'
import '../css/Feed.css';
import { useState } from 'react';
import { Container, Navbar, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane, faPlus, faBell  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Notifikasi from '../Components/Notifikasi'
import FormEditProfile from './FormEditProfile';

function EditProfile() {
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
                    <p className="title-feed-right">Edit Profile</p>
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

            <FormEditProfile />

            {/* <div className="button-upload">
                <button className="btn-login">
                    Upload Photos
                </button>
                <div className="form-edit">
                    <input className="input-name" placeholder="Name" />
                    <input className="input-name" placeholder="Username" />
                    <input className="caption" placeholder="Bio" />
                </div>
                <button className="btn-edit">
                    Save
                </button>
            </div> */}
            
            
        </div>
        
    )
}

export default EditProfile