export const URL="https://consejo.herokuapp.com/api"

//  {
// "email":"arango@gmail.com",
// "user_name":"arango",
// "password":"123456"
// }

export const login =  (credentials) => {
      return fetch(`${URL}/token/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(credentials)
        })
}

export const createNewUser = async (data) => {
    return fetch(`${URL}/user/register/`,{
        method:"POST",
        headers:{
                "Content-Type":"application/json"
            },
        body:JSON.stringify(data)
    })
}


export const saveToken = (tokens,email) => {
    const dataToSave= {
        token:tokens.access,
        refresh:tokens.refresh,
        email:email
    }
    localStorage.setItem("token-uneg",JSON.stringify(dataToSave))
}

export const loadToken = ()=>{
    return JSON.parse(localStorage.getItem("token-uneg"))
}

export const isUserLogged = ()=>{
    return JSON.parse(localStorage.getItem("token-uneg"))!==null ? true : false
}

export const logout = () =>{
    localStorage.removeItem("token-uneg")
}