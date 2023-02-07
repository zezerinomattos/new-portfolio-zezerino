import React from 'react';

// My Imports
import './style.css';
import Navbar from '../../components/Navbar';

export default function Portfolio(){
    return(
        <>
            <header className='header-portfolio'>
                <Navbar />   
                <div className='header-textos'>
                    <h1>PORTFÓLIO</h1>
                    <span>Preparei esta seção com alguns de meus projetos.</span>
                </div>

            </header>
        </>
    );
}