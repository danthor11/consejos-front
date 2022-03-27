import { logout } from "../services/login-services"

export const Logout = (props) =>{
    
    const handleClick = () =>{
        logout()
        props.setIsLogged(false)
    }
    
    return (
        <button
            onClick={handleClick}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 
            focus:ring-red-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 
            text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
        Cerrar Sesion
        </button>
    )
}