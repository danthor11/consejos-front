import React, { useEffect, useState }   from "react";
import { getUserById } from "../services/login-services";

export const UserDetail = (props) =>{
    console.log(props)
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserById(props.userId)
            .then(res =>  res.json())
            .then(data => setUser(data))
    }, []);

    return(
        <div className="p-5 rounded-md">
            {user &&(
                <> 
                    <h3 className="text-xl text-slate-700">Nombre de usuario: <span className="text-slate-900 font-semibold">{user.user_name}</span></h3>
                    <h2 className="text-xl text-slate-700">Email: <span className="text-slate-900 font-semibold">{user.email}</span></h2>
                </>
            ) 
            }
        </div>
    )
}