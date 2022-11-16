import React, { Fragment } from "react";
import "../styles/Vantagens.css";


const Vantagens = () => {


    return(
        <Fragment>
            <div className="caixa-urban-jungle">
                <h1>Equipe especializada em Urban Jungle</h1>
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
            
        </Fragment>
    )
}


export default Vantagens;