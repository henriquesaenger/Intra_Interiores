import React, { Fragment, useState } from "react";
import "../styles/Vantagens.css";
import $ from "jquery";


const Vantagens = () => {


    const [showUrban, setShowUrban] = useState(false);
    const [showSustentavel, setShowSustentavel] = useState(false);
    const [showZen, setShowZen] = useState(false);


    const handleClick = (bt1, bt2, bt3) =>{
        $(bt1).toggle(1000);
        $(bt2).hide(500);
        $(bt3).hide(500);
    }
    


    return(
        <Fragment>
            <div className="vantagens-desk">
                <div className="caixa-urban-jungle">
                    <h1>Equipe focada em Urban Jungle</h1>
                    <p>Urban Jungle é uma tendência atual que considerar elementos de fora como componente do lar. 
                        Essa abordagem é uma forma de resgatar a natureza para dentro do lar como forma de gerar vida, aconchego e bem-estar.
                        Além de trazer o verde ao lar, tende-se a criar um local focado em materiais naturais, utilizando madeira, palha, dentre outros componentes que lembram o exterior. </p>
                </div>
                <div className="caixa-urban-jungle">
                    <h1>Design de interiores Sustentável</h1>
                    <p>Visando a redução do impacto ao meio ambiente, essa proposta é perfeita.
                        A reutilização de insumos com decoração reciclável, que dá uma nova vida a paletes, produz estantes feitas com caixotes entre outras coisas, criando um ambiente confortável e equilibrado.
                    </p>
                </div>
                <div className="caixa-urban-jungle">
                    <h1>Design Zen e inspirador</h1>
                    <p>O seu lar deve ser um lugar de paz onde você possa descansar, portanto nossa equipe fará o possível para deixar fazer dele um lugar de concentração e descanso da correria do dia a dia.</p>
                </div>
            </div>
            <div className="vantagens-mobile">
                <div className="caixa-urban-jungle">
                    <button onClick={() => handleClick(".urban-text", ".sustentavel-text", ".zen-text")}>Equipe focada em Urban Jungle</button>
                    <p className="urban-text">Urban Jungle é uma tendência atual que considerar elementos de fora como componente do lar. 
                        Essa abordagem é uma forma de resgatar a natureza para dentro do lar como forma de gerar vida, aconchego e bem-estar.
                        Além de trazer o verde ao lar, tende-se a criar um local focado em materiais naturais, utilizando madeira, palha, dentre outros componentes que lembram o exterior. </p>
                </div>
                <div className="caixa-urban-jungle">
                    <button onClick={() => handleClick(".sustentavel-text",".urban-text", ".zen-text")}>Design de interiores Sustentável</button>
                    <p className="sustentavel-text">Visando a redução do impacto ao meio ambiente, essa proposta é perfeita.
                        A reutilização de insumos com decoração reciclável, que dá uma nova vida a paletes, produz estantes feitas com caixotes entre outras coisas, criando um ambiente confortável e equilibrado.
                    </p>
                </div>
                <div className="caixa-urban-jungle">
                    <button onClick={() => handleClick(".zen-text", ".sustentavel-text",".urban-text")}>Design Zen e inspirador</button>
                    <p className="zen-text">O seu lar deve ser um lugar de paz onde você possa descansar, portanto nossa equipe fará o possível para deixar fazer dele um lugar de concentração e descanso da correria do dia a dia.</p>
                </div>
            </div>
            
            
        </Fragment>
    )
}


export default Vantagens;