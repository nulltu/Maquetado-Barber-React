import axios from 'axios'

var path = 'http://localhost:4000/api'

const productActions = {
    
    //con esta accion creo un nuevo usuario y a la vez despacho username y token cuando responde la db"
    addProduct : fd =>{
        return async(dispatch, getState) => {
            const  response = await axios.post('http://127.0.0.1:4000/api/products', fd, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response)
        }
    }
}

export default productActions