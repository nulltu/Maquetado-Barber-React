import React, { useState } from 'react'
import '../styles/createAccount.css'
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'

const Login = (props) => {

    const [dataUser, setDataUser] = useState({
        email:"", username: "", password: ""
    })

   
    const readInput = e =>{
        const textInput = e.target.name
        const valueInput = e.target.value 
        setDataUser({
            ...dataUser,
            [textInput]:valueInput
        })
    }

    const sendData = async e =>{
        e.preventDefault()
        await props.createAccount(dataUser)
    }


    return (
        <>
            <form>
                <input type="email" name="email" id="email" placeholder="Enter your email" onChange={readInput}/>
                <input type="username" name="username" id="username" placeholder="Enter your username" onChange={readInput}/>
                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={readInput}/>
                <button type="submit" onClick={sendData}>Submit</button>
            </form>
        </>
    )
}


const mapDispatchToProps = {
    createAccount : userActions.createAccount
    
}


export default connect(null, mapDispatchToProps) (Login)
