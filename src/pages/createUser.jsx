
import React , {useState}from "react";
import { CreateUserSuccessfullyMessage } from "../components/UserSuccessfully";
import { MessageError } from "../components/messageError";
import { createNewUser } from "../services/login-services";
import { Link } from "react-router-dom";
import imageLogo from "../assets/logo.png"

export const CreateUser = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState(null);
    const [isUserCreated, setIsUserCreated] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault()
        createNewUser({email,password,user_name:username})  
            .then(data=>{
               
                if(data.status===400) throw {error: "El correo o nombre de usuario ya existen",code:"400"}
                if(!data.ok) throw {error:data.statusText || "Ocurrio un error",code:data.status ||"400"}
                
                
                /** 
                 * ? Hacer la redireccion al login 
                 * ! Mostrar mensaje de creacion de usaurio
                */
                console.log(data)
                setIsUserCreated(true)
            })
            .catch((err)=>{
                console.log(err)
                setError(err)
                setTimeout(()=>{
                    setError(null)
                },3000)
            })


        setEmail("")
        setPassword("")
        setUsername("")
    }

    return(
        <div >
           
           {isUserCreated
               ? <CreateUserSuccessfullyMessage/>
               : (<div className="flex h-auto my-5 flex-col pt-6 px-4 sm:w-6/12  mx-auto">    
               <img 
                   src={imageLogo}
                   alt="logo-uneg" 
                   className="w-40 mx-auto bg-stone-200 p-2 rounded-md"
               />
               <h2 className="
                   text-slate-200  
                   text-5xl 
                   text-center
                   py-4 
                   mx-4
                   font-semibold
                   shadow-sm
                   " 
                >
                  Crear nuevo usuario
               </h2>
               
               <div className="bg-slate-100 rounded-lg shadow-lg py-6">
                   <form className="px-8" onSubmit={handleSubmit}>
                       <div className="">
                           <label htmlFor="email" className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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

                       <div className="">
                           <label htmlFor="password" className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                               Nombre de usuario
                           </label>
                           <input 
                               onChange={(e)=>{setUsername(e.target.value)}}
                               type="text" 
                               id="username" 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                               placeholder="Contrase??a..."
                               value={username}
                               required
                           />
                       </div>

                       <div className="">
                           <label htmlFor="password" className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                               Contrase??a
                           </label>
                           <input 
                               onChange={(e)=>{setPassword(e.target.value)}}
                               type="password" 
                               id="password" 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                               placeholder="Contrase??a..."
                               value={password}
                               required
                           />
                       </div>

                       {error 
                           ? <MessageError error={`Error ${error.code}`} message={error.error}/>
                           : ""
                       }
                       
                       <button type="submit" 
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                           focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 my-6
                           text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                       >
                           Crear Usuario
                        </button>
                   </form>
                   <div className="mb-2 text-center">
                        <p>
                            ??Ya estas registrado? 
                            <span className="mx-2">
                                <Link to="/login" className="text-blue-600 underline">
                                    Inicia sesion aqu??
                                </Link>
                                .
                            </span>
                            
                        </p>
                        
                    </div>
               </div>
          </div>)
           }
           
           
           
        </div>
    )
}