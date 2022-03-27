import { useState } from 'react'
import { Footer } from './components/footer'
import "./index.css"
import {loadToken} from "./services/login-services"
import { NavBar } from './components/appBar'

import { AddInstruccion } from './components/Instruccion'
import { Punto } from './components/Punto'
import { Consejero } from './components/Consejero'

function App() {
    const [isLogged, setIsLogged] = useState(loadToken())

    return (
            <div className=' w-full h-1/6 bg-gradient-to-r from-cyan-400 to-blue-600'>
                <div className='static'>

                </div>
                {/* {isLogged
                    ? <Logout setIsLogged={setIsLogged}/>
                    : <Login setIsLogged={setIsLogged}/>
                }
                 */}
                 {/* <Login/> */}
                {/* <CreateUser/> */}
                {/* <CreateUserSuccessfullyMessage/> */}
                {/* <Footer/>   */}
               {/* { <CreateNewConsejo/>} */}
                {/* <Consejos/> */}
                {/* <Loader/> */}
                <NavBar/>
                {/* <AddInstruccion/>  */}
                {/* <Punto/> */}
                {/*<Consejero/>*/}
                <Punto/>
                <Footer/>
            </div>
    )
}

export default App

