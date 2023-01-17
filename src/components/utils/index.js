import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';

const SkilSpeener = (() =>{

    return(
        <div className='html-css-mestre'>
            <div className='html-css-interna'>
                <svg className='html-css'>                   
                    <circle cx='60px' cy='60' r='60'></circle>
                    <circle cx='60px' cy='60' r='60'></circle>
                </svg>
            </div>
            <div className='html-css-porcento'>
                <h2>90%</h2>
            </div>
            <div className='skill'>
                <h3>html</h3>
                <h3 className='barra'>/</h3>
                <h3>css</h3>
            </div>
        </div>
    );
})

export {SkilSpeener}