import React,{useState} from "react"
import { login,saveToken } from "../services/login-services";
import { MessageError } from "../components/messageError";
import { Link,useNavigate } from "react-router-dom";


export const Login = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault()
        login({email,password})
            .then(data =>{
                if(data.status===401) throw {error: "Usuario o contraseña no son validas.",code:"401"}
                if(!data.ok) throw {error:data.statusText || "Ocurrio un error",code:data.status ||"400"}
                return data.json()
            })
            .then(json => {
                saveToken(json,email)
                setEmail("")
                setPassword("")
                setTimeout(()=>{
                    navigate("/")
                    location.reload()
                },500 )
            })
            .catch(err=>{
                setError(err)
                setTimeout(()=>{
                    setError(null)
                },3000)
            })
    }


    return(
        <div >
           <div className="flex h-auto flex-col pt-6 px-4 my-4 mx-auto sm:w-6/12">    
                <img 
                    src="src/assets/logo.png" 
                    alt="logo-uneg" 
                    className="w-40 mx-auto bg-stone-200 p-2 rounded-md"
                />
                <h2 className="
                    text-slate-200  
                    text-5xl 
                    text-center
                    pb-2 
                    mx-4
                    font-semibold
                    shadow-sm
                    " 
                 >
                    Bienvenido
                </h2>
                <div className="bg-slate-100 rounded-lg shadow-lg ">
                    <form className="p-8 " onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Email
                            </label>
                            <input 
                                onChange={(e)=>{setEmail(e.target.value)}}
                                type="email" 
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Correo electronico..."
                                value={email} 
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Contraseña
                            </label>
                            <input 
                                onChange={(e)=>{setPassword(e.target.value)}}
                                type="password" 
                                id="password" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Contraseña..."
                                value={password}
                                required
                            />
                        </div>
                        { error
                            ? <MessageError error={`Error de autenticacion`} message={error.error}/>
                            : ""

                        }
                        <div className="mb-6 text-center">
                            <p>
                                ¿No estas registrado? 
                                <span className="mx-2">
                                    <Link to="/sing-up" className="text-blue-600 underline">
                                        Registrate aquí
                                    </Link>
                                    .
                                </span>
                                
                            </p>
                            
                        </div>
                        <button type="submit" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                            focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 
                            text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Iniciar Sesión
                         </button>
                    </form>
                </div>
               <div className="mt-4 text-center">
                    <p className="text-slate-700 italic font-semibold">
                        "La luz de Guayana".
                    </p>
                </div>

           </div>
        </div>
    )
}