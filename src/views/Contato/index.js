import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Login(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');

    const youtube = 'https://www.youtube.com/@vocenaoeoprimeiro'
    const linkedin = 'https://www.linkedin.com/in/zezerino-mattos';
    const github = 'https://github.com/zezerinomattos';
    const whats = 'https://wa.me/5548991270827?text=Olá,%20como%20vai?%20Me%20chamo...';

    function sendEmail(e){
        e.preventDefault();

        if(name === ''){
            alert('Preencha o campo NOME!');
            return;
        }else if(email === ''){
            alert('Preencha o campo E-MAIL!');
            return;
        }
        else if(message === ''){
            alert('Preencha o campo MENSAGEM!');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            telephone: telephone
        }

        emailjs.send('service_r27x4eu', 'template_7heuyse', templateParams, '0IR8ySjctKCPQ5K43')
        .then((response) => {
            // console.log('EMAIL EVIADO', response.status, response.text);
            setName('');
            setEmail('');
            setTelephone('');
            setMessage('');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className='mestre'>
            <Navbar />
            <section className='container'>
                <div className='contato-dir'>
                    <h1 className='title'>Entre em contato </h1>
                    <span>
                        Entre em contato através dos canais abaixo para discutir as <br/>suas oportunidades de trabalho, pois tenho interesse em conhecer. <br/>Estou  ansioso para ouvir suas propostas e explorar como posso ajudar <br/> sua empresa com minhas habilidades e experiência. Estou à <br/> disposição para conversar!
                    </span>

                    <form className="form" onSubmit={sendEmail}>
                        <input 
                            className="input"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        
                        <input 
                            className="input"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            className="input"
                            type="text"
                            placeholder="(  )_____-____"
                            onChange={(e) => setTelephone(e.target.value)}
                            value={telephone}
                        />

                        <textarea 
                            className="textarea"
                            placeholder="Digite sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <input className="button" type="submit" value="Enviar" />
                    </form>

                </div>

                <div className='contato-esq'>
                    <ul className='esq-redes'>
                        <li><a href={linkedin} target='blank'><ion-icon name="logo-linkedin"></ion-icon>Linkedin</a></li>
                        <li><a href={github} target='blank'><ion-icon name="logo-github"></ion-icon>GitHub</a></li>
                        <li><a href={whats} target='blank'><ion-icon name="logo-whatsapp"></ion-icon> Whatsapp</a></li>
                        <li><a href={youtube} target='blank'><ion-icon name="logo-youtube"></ion-icon> YouTube</a></li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}