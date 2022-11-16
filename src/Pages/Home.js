import React, { Fragment, useEffect} from "react";
import  "./Home.css";
import Header from "../Componentes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Vantagens from "../Componentes/Vantagens";
import Industrial from "../Componentes/Industrial";
import Agendamento from "../Componentes/Agendamento";
import Footer from "../Componentes/Footer";


const Home = () => {

    useEffect(() =>{
        Aos.init({duration: 3000});
    })


    return(
        <Fragment>
            <div className="container_home">
                <Header />            
                <div  className="Texto-home">
                    <h1>Bem-vindo a Intra Interiores!!!</h1>
                    <p>Sua casa com o seu jeito</p>
                </div>
                <div data-aos="fade-up" className="vantagens">
                    <Vantagens />
                </div>
                <div data-aos="fade-up" className="industrial">
                    <Industrial />
                </div>
                <div data-aos="fade-up" className="agendamento">
                    <Agendamento />
                </div>
                <Footer />
            </div>
        </Fragment>
        
    )
}


export default Home;