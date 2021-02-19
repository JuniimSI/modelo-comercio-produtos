// @flow 
import * as React from 'react';
import {Grid} from '@material-ui/core';
import CardRedondo from '.././CardRedondo';
import SeparatorZ from '.././SeparatorZ';

type Props = {
   
};

const Services = (props: Props) => {
    
    return (
        <>
            <SeparatorZ />
            <div className='service-container'>
                <h1 className="service-title">
                    Conheça nossos serviços!
                </h1>
                <Grid container spacing={6} className="grid-container">
                    <Grid item lg={3} sm={6} xs={12}>
                        <CardRedondo name="Venda" img="venda.jpg" description="Descrição 1 Descrição 1 Descrição 1 Descrição 1 Descrição 1 Descrição 1"/>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <CardRedondo name="Empréstimo" img="emprestimo.jpg" description="Descrição 2 Descrição 2 Descrição 2 Descrição 2 Descrição 2 Descrição 1"/>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <CardRedondo name="Telefonia" img="telefonia.jpg" description="Descrição 3 Descrição 3 Descrição 1 Descrição 1 Descrição 1 Descrição 1"/>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <CardRedondo name="Internet" img="internet.jpg" description="Descrição 4 Descrição 4 Descrição 1 Descrição 1 Descrição 1 Descrição 1"/>
                    </Grid>
                    
                
                </Grid>
            </div>
        </>
    );
};

export default Services;