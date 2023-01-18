import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { motion } from 'framer-motion';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';
import { SkilSpeener } from '../../components/utils';

// IMAGES
import imgZeze from '../../assets/HeaderZezerino.png';
import imgZezeSobre from '../../assets/SobreZezerinoGrd.png';

export default function Home(){
    const carroselSkill = useRef();
    const [widthCarroselSkill, setWidthCarroselSkill] = useState(0);

    useEffect(() => {
        setWidthCarroselSkill(carroselSkill.current?.scrollWidth - carroselSkill.current?.offsetWidth);

        Aos.init({duration: 2000});

        // console.log(carroselSkill.current?.scrollWidth, carroselSkill.current?.offsetWidth)
        

    }, []);

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

            <section data-aos='fade-up' className='sobre'>
                <div className='sobre-esquerda'>
                    <div className='esquerda-img'>
                        <img src={imgZezeSobre} alt="Imagem Zezerino" />
                    </div>
                </div>
                <div className='sobre-direita'>
                    <span>Sobre mim</span>
                    <h3>Por que me contratar para o seu <br/> próximo projeto?</h3>
                    <span>QA | Full Stack Developer</span>
                    <p>
                        Extremamente motivado, em constante desenvolvimento de minhas
                        habilidades e crescimento profissional.
                        Confio em minha habilidade como desenvolvedor de software,
                        procurando assim estar em constante evolução e acompanhando
                        atentamente as evoluções da tecnologia no mercado, buscando
                        sempre estar atualizado para superar novos desafios. <br/>
                        Com conhecimento em  Front-End, como HTML, CSS, JavaScript, 
                        React, TypeScript , Bootstrap, Wordpress  e outras. <br/>
                        Conhecimento em linguagens Back-End como Node.js, Python e Java além de 
                        conhecimento em bancos de dados como MYSQL, PostgresSQL, MongoDB.
                        Como developer conheço e desenvolvi alguns projetos usando todo o poder do Firebase, 
                        também tenho conhecimento na plataforma AWS, Google Coud.                        
                    </p>
                    <p>
                        Trabalhando ativamente como QA ANALYST TESTER, tenho conhecimento 
                        em testes funcionais, criação de massas de dados,execução de testes consumindo massa de dados,
                        análise critica, inserção de dados inválidos e análise de retorno, coleta de evidências de tela,
                        inserção de dados ao ALM, regressão, processo de automação entre outros. Conhecimento em Celenium e 
                        Cypress para realizar testes automatizados.

                    </p>
                    <div className='sobre-direita-botoes'>
                    <Link to="#" className='sobre-botao-portfolio' >VEJA MEU PORTFÓLIO</Link>
                    <Link to="#" >DOWNLOAD CV</Link>
                    </div>
                </div>
            </section>

            <section className='sills'>
                <div className='skilss-container'>
                    <h1>M</h1>
                    <h2>Minhas Skills</h2>
                    <hr/>

                    <div className='inferior-skills-mestre' data-aos='flip-up'>
                        <motion.div ref={carroselSkill} className='skills-corousel-inferior' whileTap={{cursor: 'grabbing'}}>
                            <motion.div className='inner-carrossel' 
                                drag='x' dragConstraints={{right: 0, left: -widthCarroselSkill}} 
                                initial={{x: 100}} animate={{x: 0}} transition={{duration: 0.8}}                                  
                            >
                                <SkilSpeener porcentagem={90} linguagemA={'html'} linguagemB={'css'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>

                                <SkilSpeener porcentagem={90} linguagemA={'html'} linguagemB={'css'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>

                                <SkilSpeener porcentagem={90} linguagemA={'html'} linguagemB={'css'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                                <SkilSpeener porcentagem={80} linguagemA={'JS'} linguagemB={'React.js'} className='itemSkill'/>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </>
        
    );
}