const initialState = {
    username : "",
    token: ""   
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_APP':
            return{
                ...state,
                username: action.payload.username,
                token: action.payload.token
            }
            default:
                return state
    }
}

export default userReducer