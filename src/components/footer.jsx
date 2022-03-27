import React from "react"
import {FaInstagram,FaTwitter,FaFacebookSquare , FaTelegramPlane} from "react-icons/fa"

export const Footer = ( ) => {
    return(
        <div>
            <footer className="p-5 bg-sky-50 w-full flex justify-center flex-col content-around">
                <div className="text-center p-2">
                    <h2 className="text-blue-700 font-bold text-6xl">
                        UNEG    
                    </h2>
                </div>
                <div className="flex justify-center p-2">
                    <a href="https://www.facebook.com/UNEGInforma" rel="noopener" target="_blank" className="mx-2" > 
                        <svg className=" self-center text-2xl inline" width={25} height={25} >
                            <FaFacebookSquare/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/Uneg_Oficial" rel="noopener" target="_blank" className="mx-2" >
                        <svg className=" self-center text-2xl inline" width={25} height={25} >
                            <FaInstagram/>
                        </svg>
                    </a>

                    <a href="https://twitter.com/UnegInforma" rel="noopener" target="_blank" className="mx-2" >
                        <svg className=" self-center text-2xl inline" width={25} height={25} >
                            <FaTwitter/>
                        </svg>
                    </a>

                    <a href="https://t.me/Uneginforma" rel="noopener" target="_blank" className="mx-2" >
                        <svg className=" self-center text-2xl inline" width={25} height={25} >
                            <FaTelegramPlane/>
                        </svg>
                    </a>
                </div>
                <p className="text-center p-2">
                    ©2022 Universidad Nacional Experimental de Guayana.
                </p>
                
            </footer>
        </div>
    )
}