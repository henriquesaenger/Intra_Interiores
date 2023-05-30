import React from "react"; 
import "../styles/Industrial.css";
import steel_window from "../imagens/window.png";
import brick_wall from "../imagens/empty-red-brick-wall.jpg"


const Industrial = () => {


    return(
        <div>
            <div className="caixa-texto-industrial">
            <h1>Estilo Industrial</h1>
            <p>Um estilo rústico que na maioria das vezes lembra fábricas antigas e vem sendo tendência nos últimos tempos, principalmente quando se trata de 
                cafeterias, restaurantes e pubs. Também é uma alternativa ótima para lofts. Geralmente um estilo mais bruto, tendo pouco revestimento, piso na maioria das vezes de concreto,
                madeira ou cimento queimado, também contando com uma estrutura mais exposta, livre de muitas divisórias para os cômodos, o que disponibiliza um espaço vasto, como por exemplo,
                tendo uma cozinha aberta que se integra diretamente com a sala, formando cômodos multifuncionais e aproximando as pessoas mesmo elas fazendo coisas diferentes. Também conhecido por usar de uma paleta de cores mais neutra,
                integrando paletas mais vibrantes e marcantes de forma isolada na decoração. Tendo grande presença de luz natural, foca em janelas maiores geralmente feitas com ferro.
            </p>
            <div className="industrial-caracteristicas">
                <div className="industrial-card">
                    <p>Janelas grandes e geralmente feitas em ferro</p>
                    <img src={steel_window} alt="steel_window" />
                </div>
                <div className="industrial-card">
                    <p>Estilo mais rústico e com menos revestimento</p>
                    <img src={brick_wall} alt="parede sem revestimento" />
                </div>
                <div className="industrial-card">
                    <p>Paleta de cores mais neutra</p> 
                    <div className="paleta">
                    </div>

                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Industrial;