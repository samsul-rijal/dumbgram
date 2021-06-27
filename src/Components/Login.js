import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import {Button, Form} from 'react-bootstrap'

import { UserContext } from '../contexts/userContext'
import { API, setAuthToken } from '../config/api'

export default function Login(props) {
    const history = useHistory();
    const [state, dispatch] = useContext(UserContext);
    const [message, setMessage] = useState('')
    const [form, setForm] = useState({  
        email: '',
        password: ''
    })

    const {email,password} = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const body = JSON.stringify({
                email,
                password
            })

            const response = await API.post("/login", body, config)
            console.log(response)

            setMessage(response.data.message)

            if(response.data.status === 'success') {
                alert('Login Successfull')
            }

            setAuthToken(response.data.user.token)

            dispatch({
                type: "LOGIN_SUCCESS", 
                payload: {...response.data.user.dataUser, token: response.data.user.token}
            })
            
            history.push("/feed")

        } catch (error) {
            console.log(error)    
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            
            {message &&
                <div class="alert alert-danger" role="alert">
                    {message}
                </div>
            }

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input className="form-input" 
                    onChange={onChange} 
                    value={email} 
                    name="email"
                    type="email" 
                    placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <input className="form-input" 
                    onChange={onChange} 
                    value={password} 
                    name="password"
                    type="password" 
                    placeholder="Password" />
            </Form.Group>

            
            <button type="submit" className="btn-loginModal">Login</button>
        </Form>
    )
}