// @flow 
import * as React from 'react';
import {Grid} from '@material-ui/core';

import { Button } from '../Button';

type Props = {
    
};
export const PanelProdutos = (props: Props) => {

    function handleCliked(){
        console.log("CLIKED");
    }

    return (
        <div className="container-produtos">
            <Grid container spacing={6} >
                    <Grid className="item-container-produtos" item lg={6} sm={7} xs={12}>
                        <div className="panel-2-text">
                            <h1 className="title-2-text">Nossos <br/> Produtos</h1>
                            <h3 className="subtitle-2-text">Adquire já seus produtos do jeito  <br/> que você gosta.. <br/>
                                Tudo feito da melhor forma possível <br/> para satisfazer você.</h3>
                        </div>
                        <div className="panel-2-buttons">
                            <Button onClick={() => handleCliked} type="button" buttonStyle="btn--primary" buttonSize=" "> Visite Agora! </Button>      
                        </div>
                    </Grid>
                    <Grid className="item-container-produtos" item lg={6} sm={5} xs={12}>
                        <img className="panel-2-img" src="./img/panel-2-prod.png" alt="Logo"/>
                    </Grid>
                   
                </Grid>
        </div>
    );
};

export default PanelProdutos;