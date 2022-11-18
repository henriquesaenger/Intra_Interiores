import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Agendamento.css";


const Agendamento = () => {

    const [email, setEmail] = useState("");

    let navigate = useNavigate();


    

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    
    const handleSubmit = () => {
        localStorage.setItem("email", email);
        let path = "/cadastro"; 
        navigate(path);
    }


    return(
        <Fragment>
            <div className="agendamento">
                <h2>Agende diretamente com a nossa equipe um orçamento para que possamos trabalhar juntos pro seu lar ficar cada vez mais com a sua cara!</h2>
                <form className="container-form">
                    <div class="did-floating-label-content">
                        <input class="did-floating-input" type="email" placeholder=" "  onChange={handleChange} />
                        <label class="did-floating-label">Email</label>
                    </div>
                    <button onClick={handleSubmit} className="botao_avancar">Avançar</button>
                </form>
                
            </div>
        </Fragment>
    )
}



export default Agendamento;