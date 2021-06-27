import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import '../css/CreatePost.css'

import { API } from '../config/api'

export default function FormCreatePost() {
    let history = useHistory();

    const goToFeed = () => {
        alert('Create post successfull')
        history.push('/feed')
    }

    const [form, setForm] = useState({
        fileName: '',
        caption: '',
    })

    const [preview, setPreview] = useState('')

    const {fileName, caption} = form

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
                    "Content-type": "multipart/form-data"
                }
            }

            const formData = new FormData()
            formData.set("caption", form.caption)
            formData.set("imageFile", form.fileName[0], form.fileName[0].name)

            await API.post('/feed', formData, config)

            goToFeed();

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='form-create'>
            <Form onSubmit={(e)=> {
                e.preventDefault()
                handleOnSubmit()
                }} >

                <div>
                    <input type="file" name="fileImage" onChange={onChange} name="fileName" className="btn-post" />
                </div>

                <div className="preview-img">
                    {preview && <img src={preview}  />}
                </div>

                <div>
                    <input className="caption-post" type="text" onChange={onChange} name="caption" placeholder="Caption" />
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