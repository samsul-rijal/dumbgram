import React from 'react'
import '../css/Notif.css'
import AdulIcon from '../img/AdulIcon.png'
import EllipseIcon from '../img/EllipseIcon.png'

function Notifikasi(props) {
    const { show, handleClose } = props;
	const handleButtonCloseNotif = () => handleClose(!show);
    return show && (
		<div className="notif">
			<div className="n-overlay" onClick={ handleButtonCloseNotif }></div>
			<div className="n-body">
				<section className="n-people-come">
					<img src={ AdulIcon } className="n-img" />
					<span className="n-name">egi</span>
					<p className="n-notif"><span>Comment : </span>Nice place</p>
				</section>
				<section className="n-people-come">
					<img src={ EllipseIcon } className="n-img" />
					<span className="n-name">egi</span>
					<p className="n-notif"><span>Comment : </span>Good vibe</p>
				</section>
			</div>
		</div>
	);
}

export default Notifikasi
