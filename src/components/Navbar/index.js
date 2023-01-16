import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';

// MY IMAGE
import logo from '../../assets/HeaderLogo.png';


export default function Navbar(){

    const [actived, setActived] = useState(false);
    const [option, setOption] = useState('home');

    const urlYouTube = 'https://www.youtube.com/@vocenaoeoprimeiro'

    function ativaMenuHamburguer(){
        setActived(!actived);
    }

    return(
        <nav className='container'>
            <div className='img-logo'>
                <Link to='/'><img src={logo} alt="Logotipo" /></Link>
            </div>

            <ul className={`menu-left ${actived ? 'active-menu' : 'not-active-menu'}`}>
                <li><Link to='/' className={option === 'home' ? 'optionActived' : null} onClick={() => setOption('home')} >Home</Link></li>
                <li><Link to='#' className={option === 'sobre' ? 'optionActived' : null} onClick={() => setOption('sobre')} >Quem Sou</Link></li>
                <li><Link to='#' className={option === 'skills' ? 'optionActived' : null} onClick={() => setOption('skills')} >Skills</Link></li>
                <li><a href={urlYouTube} target='blank' className={option === 'youtube' ? 'optionActived' : null} onClick={() => setOption('youtube')}>Canal YouTube</a></li>
                <li><Link to='curriculo' target='blank' className={option === 'curriculo' ? 'optionActived' : null} onClick={() => setOption('curriculo')} >Curriculo</Link></li>               
                <li><Link to='contato' className={option === 'contato' ? 'optionActived' : null} onClick={() => setOption('contato')} >Contato</Link></li>
            </ul>

            <ul className='menu-humburguer'>
                {
                    actived ? <li onClick={ativaMenuHamburguer} ><ion-icon name="close-outline"></ion-icon></li>
                    : <li onClick={ativaMenuHamburguer} ><ion-icon name="menu-outline"></ion-icon></li>
                }
            </ul>
        </nav>
    );
}