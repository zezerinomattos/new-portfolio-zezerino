import React from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';

// IMAGES
import imgZeze from '../../assets/HeaderZezerino.png';
import imgZezeSobre from '../../assets/SobreZezerino.png';

export default function Home(){
    return(
        <>
            <header className='container'>
                <Navbar />
                <div className='header-inf-mestre'>
                    <div className='textos'>
                        <h1>Zezerino Mattos</h1>
                        <h2>Full Stack Developer</h2>

                        <Link to="#" >Conheça meu portfólio profissional</Link>
                    </div>
                    
                    <div className='img-ze image-block'>
                        <img src={imgZeze} alt="Imagem" />
                    </div>
                </div>
            </header>

            <section className='sobre'>
                <div className='sobre-esquerda'>
                    <div className='esquerda-img'>
                        <img src={imgZezeSobre} alt="Imagem Zezerino" />
                    </div>
                </div>
                <div className='sobre-direita'>
                    <span>Sobre mim</span>
                    <h3>Por que me contratar para o seu <br/> próximo projeto?</h3>
                    <span>Full Stack Developer</span>
                    <p>
                        Extremamente motivado, em constante desenvolvimento de minhas
                        habilidades e crescimento profissional.
                        Confio em minha habilidade como desenvolvedor de software,
                        procurando assim estar em constante evolução e acompanhando
                        atentamente as evoluções da tecnologia no mercado, buscando
                        sempre estar atualizado para superar novos desafios. <br/>
                        Com conhecimento em linguagens Front-End, como JavaScript, HTML,
                        CSS, Bootstrap, React e outras. <br/>
                        Conhecimento em linguagens Back-End como Node.js, Python e Java além de 
                        conhecimento em bancos de dados como MYSQL, PostgresSQL, MongoDB.
                        Como developer conheço e desenvolvi alguns projetos usando todo o poder do Firebase, 
                        também tenho conhecimento na plataforma AWS, Google Coud.
                    </p>
                </div>
            </section>
        </>
        
    );
}