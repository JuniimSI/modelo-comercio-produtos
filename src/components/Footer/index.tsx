// @flow 
import * as React from 'react';

export const Footer: React.FunctionComponent = (props) => {
    return (
        <>
        <div className="bg-footer"></div>
            <footer >
                <div className="container-footer">
                    <div className="item-footer"> 
                        <h3 className="title-footer">Nome da Loja</h3>
                        <p className="text-footer">
                            Loja desde tal ano, composta por excelentes profissionais. Fundada no intuito de trazer novos produtos para
                            os consumidores da cidade.
                        </p>
                    </div>
                    <div className="item-footer"> 
                        <h3 className="title-footer">Parceiros</h3>
                        <div className="text-footer">
                            <p>Parceiro 1</p>
                            <p>Parceiro 2</p>
                            <p>Parceiro 3</p>
                            
                        </div>
                    </div>
                    <div className="item-footer">
                        <h3 className="title-footer">Contatos</h3>
                        <p className="text-footer">
                            Loja desde tal ano, composta por excelentes profissionais. Fundada no intuito de trazer novos produtos para
                            os consumidores da cidade.
                        </p>
                    </div>
                </div>
                <div className="container-footer down">
                    <p className="little-text">
                        Copyright Júnior Dev * JuniimSI 
                    </p>
                </div>
                
            </footer>
            
           
        </>
    );
};

export default Footer;