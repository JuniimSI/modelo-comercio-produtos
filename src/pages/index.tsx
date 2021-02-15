// @flow 
import * as React from 'react';
import { Button } from '../components/Button';

const Home = (props) => {

    function handleCliked(){
        console.log("CLIKED");
    }

    return (
        <>
            <div className="container-home">
                <div className="bg-video">
                    <video autoPlay muted loop className="video">
                    <source src="./video/panel-1-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div>
                    {/* <div className="panel-1-img">
                        <img src="./img/roupas.png" width="150" alt=""/>
                    </div> */}
                    <div className="panel-1-text">
                        <h1 className="title-1-text">Olá, Bem-vindo a Loja X!</h1>
                        <h3 className="subtitle-1-text">Adquire já seus produtos do jeitinho que você gosta.. <br/>
                            Tudo feito da melhor forma possível para satisfazer você.</h3>
                        <h5 className="subsubtitle-1-text">Venha já nos visitar e levar pra casa aquilo que lhe falta.</h5>
                    </div>
                    <div className="panel-1-buttons">
                        <Button onClick={() => handleCliked} type="button" buttonStyle="btn--primary" buttonSize=" "> Visite Agora! </Button>
                        <Button onClick={() => handleCliked} type="button" buttonStyle="btn--outline" buttonSize=" "> Visite Agora! </Button>
                    </div>
                </div>
            </div>
            <div className="completa">s</div>
        </>
    );
};

export default Home;