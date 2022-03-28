import { logout } from "../services/login-services"
import { useNavigate } from "react-router-dom"

export const Logout = () =>{
    const navigate = useNavigate()

    const handleClick = () =>{
        logout()
        location.reload()
        navigate("/login")
    }
    
    return (
        <button
            onClick={handleClick}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 
            focus:ring-red-300 font-medium rounded-lg text-sm w-auto  px-1 py-1 
            text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24} fill={"#9da4b0"}>
            <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
        </svg>
        </button>
    )
}