import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Link as Links } from "react-scroll";

import Aos from 'aos';
import 'aos/dist/aos.css';


// MY IMPORTS
import './style.css';
import './responsive.css';

// MY IMAGE
import logo from '../../assets/HeaderLogo.png';

export default function Footer(){
    const youtube = 'https://www.youtube.com/@vocenaoeoprimeiro'
    const linkedin = 'https://www.linkedin.com/in/zezerino-mattos';
    const github = 'https://github.com/zezerinomattos';
    const whats = 'https://wa.me/5548991270827?text=Olá,%20como%20vai?%20Me%20chamo...';

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <footer>
            <div className='container-superior'>
                <div className='img-logo'>
                    <Links Links activeClass="active" to="container" spy={true} smooth={true} offset={-160} duration={500}><img src={logo} alt="Logotipo-futer" /></Links>
                </div>
                <hr/>
            </div>
            <nav className='container-inferior'>
                <ul className='menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Links activeClass="active" to="sobre" spy={true} smooth={true} offset={-40} duration={1000}>Quem Sou</Links></li>
                    <li><Links activeClass="active" to="sills" spy={true} smooth={true} offset={0} duration={1000}>Skills</Links></li>
                    <li><a href={youtube} target='blank'>Canal YouTube</a></li>
                    <li><Link to='/curriculo'>Curriculo</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>

                <ul className='redes-sociais'>
                    <li><a href={linkedin} target='blank'><ion-icon name="logo-linkedin"></ion-icon>Linkedin</a></li>
                    <li><a href={github} target='blank'><ion-icon name="logo-github"></ion-icon>GitHub</a></li>
                    <li><a href={whats} target='blank'><ion-icon name="logo-whatsapp"></ion-icon>Whatsapp</a></li>
                </ul>

                <ul className='contato'>
                    <li><ion-icon name="call-outline"></ion-icon> 48 9 91270827</li>
                    <li><ion-icon name="mail-outline"></ion-icon> mattoszz@hotmail.com</li>
                </ul>
            </nav>
            <span>Copyright © Zezerino Mattos. Todos diretos reservados.</span>
        </footer>
    );
}