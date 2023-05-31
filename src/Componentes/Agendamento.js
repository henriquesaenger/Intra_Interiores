import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Agendamento.css";
import $ from "jquery";


const Agendamento = () => {

    const [email, setEmail] = useState("");

    let navigate = useNavigate();


    const disableButtonWhenInputEmpty = () => {
        if(email === ""){
            $("botao_avancar").css("opacity", "0.3");
            $("botao_avancar").css("background-color", "grey");
            $("botao_avancar").css("pointer-events", "none");
        }
        else{

        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    
    const handleSubmit = () => {
        localStorage.setItem("email", email);
        let path = "/registro"; 
        navigate(path);
    }


    useEffect(() => {
        disableButtonWhenInputEmpty();
    }, [email]);


    return(
        <Fragment>
            <div className="agendamento">
                <h2>Agende diretamente com a nossa equipe um orçamento para que possamos trabalhar juntos pro seu lar ficar cada vez mais com a sua cara!</h2>
                <div className="container-section-form">
                    <form  disabled={email.length !== "" ? false : true} className="container-form">
                        <div class="did-floating-label-content">
                            <input class="did-floating-input" required type="email" minLength="7" placeholder=" "  onChange={handleChange} />
                            <label class="did-floating-label">Email</label>
                        </div>
                        <button onClick={handleSubmit} className="botao_avancar">Avançar</button>
                    </form>
                </div>
                
            </div>
        </Fragment>
    )
}

export default Agendamento;