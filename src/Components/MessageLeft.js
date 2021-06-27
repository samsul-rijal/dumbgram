import React from 'react'
import '../css/MessageLeft.css'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Dumbgram from '../img/Dumbgram.png'
import IconEgi from '../img/IconEgi.png'
import IconBeach from '../img/IconBeach.png'

function MessageLeft() {
    return (
        <div className="feed-left">
            <Navbar className="img-bar">
                <Link to="/feed">
                    <img className="img-bar" src={Dumbgram} alt="dumbgram" />
                </Link>
            </Navbar>

            <div className="sm-list-message">
				<section className="sm-message">
					<img src={ IconEgi } alt="notifmessage1"/>
					<span className="sm-name">egi_lol</span>
					<p className="sm-text-message">Hello Lisa</p>
				</section>
				<section className="sm-message">
					<img src={ IconBeach } alt="notifmessage2"/>
					<span className="sm-name">beach_lover</span>
					<p className="sm-text-message">Hello Lisa, when do you go to the beach</p>
				</section>
			</div>
        </div>
    )
}

export default MessageLeft
