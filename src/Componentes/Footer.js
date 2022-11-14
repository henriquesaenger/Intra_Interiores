import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";



const Footer = () => {




    return(
        <div className="footer">
            <div className="first-column">
                <button>Sobre nós</button>
                <button>Central de ajuda</button>
                <button>Galeria</button>
            </div>
            <div className="second-column">
                <Link>Facebook</Link>
                <Link>Twitter</Link>
                <Link>Instagram</Link>
            </div>
        </div>
    )
}


export default Footer;