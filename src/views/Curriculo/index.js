import React from 'react';

// My Imports
import './style.css';
import CurriculoFront from '../../assets/Curriculo-Zezerino.pdf';

function Curriculo(){
    return(
        <div className='container'>
            <div className='textos'>
                <h1>Olá, seja muito bem vindo!</h1>
                <p>
                    Adoraria ter a chance de conversar mais sobre como as minhas habilidades <br/>
                     e experiências poderiam contribuir para o crescimento da empresa. <br/> <br/>
                     Fique avontade para imprimir ou fazer download do meu currículo.
                </p>
            </div>
            <div className='curriculo-mestre'>
                <embed src={CurriculoFront} type="application/pdf" className='curriculo'/>
            </div>
        </div>
    );
}

export default Curriculo;
