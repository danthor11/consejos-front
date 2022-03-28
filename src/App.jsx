import { useState } from 'react'
import { Footer } from './components/footer'
import "./index.css"
import {loadToken} from "./services/login-services"
import { NavBar } from './components/appBar'
import { AddInstruccion } from './components/Instruccion'
import { Punto } from './components/Punto'
import { Consejero } from './components/Consejero'
import { Routes,Route, Navigate } from 'react-router-dom'
import { CreateNewConsejo } from './components/ConsejoForm'
import { CreateUser } from './pages/createUser'
import {Login} from "./pages/login"
import { SearchPunto } from './components/searchPunto'
import {Consejos} from "./pages/Consejos"
import { MainPage } from './pages'
import ConsejerosPage from './pages/Consejeros'


function App() {
    const [isLogged, setIsLogged] = useState(loadToken())

    return (
        <div className=' w-full h-1/6 bg-gradient-to-r from-cyan-400 to-blue-600'>
                <NavBar isLogged={isLogged}/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    {isLogged && (
                        <>
                            <Route path='/create-consejo' element={<CreateNewConsejo/>}  />
                            <Route path="/consejos" element={<Consejos/>}/>
                           
                            <Route path="/add-consejero" element={<Consejero/>}/>
                            <Route path='/consejero' element={<ConsejerosPage/>}/>
                            <Route path="/add-instruccion" element={<AddInstruccion/>} />
                            <Route path='/search' element={<SearchPunto/>}/>
                        </>
                    )}
                    {!isLogged && (
                        <>
                            <Route path="/login" element={<Login/>} />
                            <Route path="/sing-up" element={<CreateUser/>} />
                        </>
                    )}
                    
                    <Route path="*" element={<div>Pagina no existe</div>}/>
                    
                </Routes>


                {/* {isLogged
                    ? <Logout setIsLogged={setIsLogged}/>
                    : <Login setIsLogged={setIsLogged}/>
                }
                 */}
                 

                <Footer/>
            </div>
    )
}

export default App

