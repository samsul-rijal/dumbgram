import React from 'react'
import '../css/Login.css';
import ModalLogin from './ModalLogin'

function Login(props) {
    const { showLogin, handleCloseLogin } = props;
    return (
        <div>
            <ModalLogin />
        </div>
    )
}

export default Login



