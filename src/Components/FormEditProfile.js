import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import '../css/CreatePost.css'

import { API } from '../config/api'

export default function FormEditCreatePost() {
    // const history = useHistory();


    const [state, setState ] = useState([])
    const [form, setForm] = useState({
        image: '',
        fullname: '',
        username: '',
        bio: ''
    })

    const [preview, setPreview] = useState('')

    const {image, fullname, username, bio} = form

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
        })

        if(e.target.type === "file"){
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }

    const handleOnSubmit = async () => {
        try {

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const formData = new FormData()
            formData.set("fullname", form.fullname? form.fullname : state.fullname)
            formData.set("username", form.username? form.username : state.username)
            formData.set("bio", form.bio? form.bio : state.bio)

            if(form.image) {
                formData.set("imageFile", form.image[0], form.image[0].name)
            }
            const response = await API.patch('/users', formData, config)
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    const loadUser = async () => {
        try {
            const response = await API.get('/user')
            console.log(response)

            setState(response.data.data.getUserId)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadUser()
    },[])

    console.log(state)


// import { useState, useEffect } from 'react'
// import { Form, Button } from 'react-bootstrap'

// export default function FormEditProfile({user}) {

//     const [form, setForm] = useState({
//         image: '',
//         fullname: '',
//         username: '',
//         bio: '',
//     })

//     const [preview, setPreview] = useState('')

//     const {image, fullname, username, bio} = form

//     const onChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
//         })

//         if(e.target.type === "file"){
//             let url = URL.createObjectURL(e.target.files[0])
//             setPreview(url)
//         }
//     }

    // useEffect(()=>{
    //     setForm({
    //         image: user.image,
    //         fullname: user.fullname,
    //         username: user.username,
    //         bio: user.bio
    //     })
    // },[])

    

    return (
        <div className='form-create'>
            <Form onSubmit={(e)=> {
                e.preventDefault()
                handleOnSubmit()
                }} >
                <div>
                    <input type="file" name="fileImage" onChange={onChange} name="image" className="btn-post" id="inputGroupFile01" />
                </div>

                {/* <div className="preview-img">
                    {preview || image && <img src={image} className="img-fluid rounded"/>}
                </div> */}
                <div className="preview-img">
                    {preview && <img src={preview}  />}
                </div>

                <div>
                    <input className="input-name" type="text" onChange={onChange} value={fullname} name="fullname" placeholder="Name" />
                </div>
                
                <div>
                    <input className="input-name" type="text" onChange={onChange} value={username} name="username" placeholder="Username" />
                </div>

                <div>
                    <input className="caption-post" type="text" onChange={onChange} value={bio} name="bio" placeholder="Bio" />
                </div>
                
                <div>
                    <button type="submit" className="btn-edit">
                        Save
                    </button>
                </div>
            </Form>
        </div>
    )
}