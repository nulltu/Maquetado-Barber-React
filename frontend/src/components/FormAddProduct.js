import React, { useState } from 'react'
import {connect} from 'react-redux'
import '../styles/admin.css'
import { Button, TextField } from '@material-ui/core'
import productActions from '../redux/actions/productActions'
import axios from 'axios'

const FormAddProducts = (props) => {

    const [product, setProduct] = useState({
        title: '', description: '', image:'', price: ''
    })

    const readTextField = (e) => {
        const value = e.target.name === 'image' ? e.target.files[0] : e.target.value
        setProduct({
            ...product,
            [e.target.name]: value
        })
    }

    const sendFormProduct = async e => {
        e.preventDefault()
        const fd = new FormData()
        fd.append('title', product.title)
        fd.append('description', product.description)
        fd.append('image', product.image)
        fd.append('price', product.price)
        // await props.sendFormProduct(fd)
        const  response = await axios.post('http://127.0.0.1:4000/api/products', fd, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }



    return (
        <>
            <form action="">
                <TextField type="text" name="title" placeholder="Title" onChange={readTextField}/>
                <TextField type="text" name="description" placeholder="Description" onChange={readTextField}/>
                <TextField type="file" name="image" onChange={readTextField}/>
                <TextField type="number" name="price" placeholder="Price" onChange={readTextField}/>
                <button onClick={sendFormProduct}>Send</button>
            </form>
        </>
    )
}

const mapDispatchToProps = () =>{
    return {
        sendFormProduct : productActions.addProduct
    }
}

export default connect(null, mapDispatchToProps) (FormAddProducts)