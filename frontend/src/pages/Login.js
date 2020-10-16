import React, { useState } from 'react'
import '../styles/createAccount.css'
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'

const Login = (props) => {

    //genero el obejto "user" para luego enviarlo a la axion "crear usuario" que pegara a la ruta post.
    const [dataUser, setDataUser] = useState({
        email:"", username: "", password: ""
    })

   
    //leemos los inputs para despues guardador en el estado del componente
    const readInput = e =>{
        const textInput = e.target.name
        const valueInput = e.target.value 
        setDataUser({
            ...dataUser,
            [textInput]:valueInput
        })
    }

    //enviamos el obejto a la accion que pegara en la db"
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

//coneccioon a redux para poder enviar el obejo a la accion de "create account"
export default connect(null, mapDispatchToProps) (Login)
