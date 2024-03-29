import React, { Fragment } from "react";
import "../styles/Header.css";
import {IoClose} from "react-icons/io5";



const TextoEntrada= () => {



    return(
        <Fragment>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><a className="logo" href="/">Intra Interiores</a></li>
                        <li>
                            <ul>
                                <li><a href="/sobre-nos">Sobre nós</a></li>
                                <li><a href="/facebook">Facebook</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-mobile">
                <IoClose className="close-icon" />
                <nav>
                    <ul>
                        <li><a className="logo" href="/">Intra Interiores</a></li>
                        <li>
                            <ul>
                                <li><a href="/sobre-nos">Sobre nós</a></li>
                                <li><a href="/facebook">Facebook</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </Fragment>
    )


}




export default TextoEntrada;