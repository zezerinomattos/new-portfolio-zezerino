import React, {useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

// MY IMPORTS
import './style.css';
import './responsive.css';

/*----------------------------------------------------*/

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

/*----------------------------------------------------*/

// FUNCTION RECONHECIMENTOS
const Reconhecimento = ((props) => {

    useEffect(() => {       
        Aos.init({duration: 2000});
    }, []);

    return(
        <div className='container-img' aria-haspopup="true">
            <img src={props.img} alt="Imagem de premios de reconhecimento" data-aos='fade-up'/>
        </div>
    );
});

/*----------------------------------------------------*/

// FUNCTION YOUTUBE  

const PreviewCanalYoutube = ((props) => {
    return(
      <div className="canal-container">
        <div className="container-mestre">
          <iframe src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
      </div>
    );
});

export { SkilSpeener, Reconhecimento, PreviewCanalYoutube }
