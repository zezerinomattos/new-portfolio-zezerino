import React from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';

// FUNCTION SKILS
const SkilSpeener = ((props) =>{

    const porcentagem = (() => { 
        let valorProps = (props.porcentagem * 378) / 100      
        const porcent =  378 -  valorProps;
        return porcent;
    });

    return(
        <div className='html-css-mestre'>
            <div className='html-css-interna'>
                <svg className='html-css'>                   
                    <circle cx='60px' cy='60' r='60'></circle>
                    <circle cx='60px' cy='60' r='60' style={{strokeDashoffset: porcentagem()}}></circle>
                </svg>
            </div>
            <div className='html-css-porcento'>
                <h2>{props.porcentagem}%</h2>
            </div>
            <div className='skill'>
                <h3>{props.linguagemA} {props.linguagemB && '/'} {props.linguagemB} {props.linguagemC && ' / '} {props.linguagemC}</h3>
            </div>
        </div>
    );
});


// FUNCTION RECONHECIMENTOS
const Reconhecimento = ((props) => {
    return(
        <div className='container-img'>
            <img src={props.img} alt="Imagem de premios de reconhecimento" />
        </div>
    );
})

export { SkilSpeener, Reconhecimento }
