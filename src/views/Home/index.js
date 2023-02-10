import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { motion } from 'framer-motion';

import { Link as Links } from "react-scroll";

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { SkilSpeener, Reconhecimento, PreviewCanalYoutube } from '../../components/utils';
import LinksPortfolio from '../../components/LinksPortfolio';

// IMAGES
import imgZeze from '../../assets/HeaderZezerino.png';

// MY IMAGES SOBRE
import imgZezeSobre from '../../assets/SobreZezerinoGrd.png';

// MY IMAGES RECONHECIMENTOS
import reconhecimento001 from '../../assets/reconhecimento-desempenho-inspirador.PNG';
import reconhecimento002 from '../../assets/reconhecimento-shampions.PNG';
import reconhecimento003 from '../../assets/reconhecimento-sempre-se-comunicando.PNG';
import reconhecimento004 from '../../assets/reconhecimento-fazer-mais-c-menos.png';
import reconhecimento005 from '../../assets/reconhecimento-construindo-confianca.PNG';
import reconhecimento006 from '../../assets/reconhecimento-prazer-trabalhar-com-vc.PNG';

// MY IMAGES PORTFÓLIO
import imgPortfolio from '../../assets/portfolio-home-001.png';

// MY IMAGES CANAL YOUTUBE
import LogoYoutube from '../../assets/CanalYoutube.png';


export default function Home(){

    const carroselSkill = useRef();
    const [widthCarroselSkill, setWidthCarroselSkill] = useState(0);

    //URL PORTFOLIO
    const urlLinkPortfolio = 'https://github.com/zezerinomattos';

    //URL CANAL YOUTUBE
    const dbUrls = [
        "https://www.youtube.com/embed/wfOyNFMs2HI",
        "https://www.youtube.com/embed/iJjrWyyLUGA",
        "https://www.youtube.com/embed/bHfd_2FuN6s", 
        "https://www.youtube.com/embed/KH09oBb8aH8"    
    ];

    useEffect(() => {
        setWidthCarroselSkill(carroselSkill.current?.scrollWidth - carroselSkill.current?.offsetWidth);

        Aos.init({duration: 2000});
        // console.log(carroselSkill.current?.scrollWidth, carroselSkill.current?.offsetWidth)image.png
    }, []);

    return(
        <>
            <header className='container'>
                <Navbar />
                <div className='header-inf-mestre'>
                    <div className='textos'>
                        <h1>Zezerino Mattos</h1>
                        <h2>Front-End Developer</h2>

                        <Link to="/portfolio" >Conheça meu portfólio profissional</Link>
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
                    <span>Front-End Developer | QA</span>
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
                    <Links to="portfolio" spy={true} smooth={true} offset={0} duration={1000} className='sobre-botao-portfolio' >VEJA MEU PORTFÓLIO</Links>
                    <Link to="/curriculo" target='_blank' >DOWNLOAD CV</Link>
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
                                <SkilSpeener porcentagem={75} linguagemA={'JavaScript'} />
                                <SkilSpeener porcentagem={80} linguagemA={'React.js'} />
                                <SkilSpeener porcentagem={65} linguagemA={'Firebase'} />
                                <SkilSpeener porcentagem={50} linguagemA={'Jquery'} />
                                <SkilSpeener porcentagem={40} linguagemA={'Node.js'} />
                                <SkilSpeener porcentagem={60} linguagemA={'Wordpress'} />
                                <SkilSpeener porcentagem={40} linguagemA={'React Native'} />
                                <SkilSpeener porcentagem={40} linguagemA={'TypeScript'} />
                                <SkilSpeener porcentagem={60} linguagemA={'Bootstrap'} />
                                <SkilSpeener porcentagem={80} linguagemA={'Styled comp.'} />
                                <SkilSpeener porcentagem={45} linguagemA={'UI / UX'} />
                                <SkilSpeener porcentagem={30} linguagemA={'Java'} />
                                <SkilSpeener porcentagem={35} linguagemA={'Python'} />
                                <SkilSpeener porcentagem={65} linguagemA={'Celenium'} />
                                <SkilSpeener porcentagem={50} linguagemA={'Cypress'} />
                                <SkilSpeener porcentagem={50} linguagemA={'MongoDB'} />
                                <SkilSpeener porcentagem={60} linguagemA={'MYSQL'} />
                                <SkilSpeener porcentagem={60} linguagemA={'POSTGRESQL'} />
                                <SkilSpeener porcentagem={20} linguagemA={'Docker'} />
                                <SkilSpeener porcentagem={25} linguagemA={'AWS'} />
                                <SkilSpeener porcentagem={20} linguagemA={'Google Cloud'} />
                                <SkilSpeener porcentagem={80} linguagemA={'Agile Scrum'} />
                                
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>

            <section className='reconhecimentos'>
                <div className='reconhecimentos-textos'>
                    <h2>Reconhecimentos</h2>
                    <hr/>
                    <h1>R</h1>  
                </div>

                <div className='inferior-reconhecimentos-mestre'>
                    <Reconhecimento img={reconhecimento001}/>
                    <Reconhecimento img={reconhecimento002}/>
                    <Reconhecimento img={reconhecimento003}/>
                    <Reconhecimento img={reconhecimento004}/>
                    <Reconhecimento img={reconhecimento005}/>
                    <Reconhecimento img={reconhecimento006}/> 
                </div>
            </section>

            <section className='portfolio'>
                <div className='portfolio-container'>
                    <div className='portfolio-imagem'>
                        <img src={imgPortfolio} alt="Imagem de Portfólio"/>
                    </div>
                    <div className='portfolio-texto'>
                        <span>Portfólio</span>
                        <h3>"Não há projeto sem disciplina. <br/> Não há disciplina sem inteligência"</h3>
                        <p>
                            Te convido a conhecer um pouco do meu trabalho através de projetos que trago para ilustrar meu portfólio, aqui vou apresentar apenas alguns, mas tenho mais de 40 projetos em meu repositório, sendo quase 30 deles com status de público. <br/>

                            Aqui vou trazer apenas projetos front-end e full stack, pois preciso apresentar algo visual e por esse motivo não vou trazer projetos back-end. Também não vou trazer layout feitos com o Figma ou AdobeXD, pois a ideia aqui é apresentar projetos codados e não seus protótipos. <br/>

                            Com tudo deixo aqui um LINK que vai lhe direcionar para o meu repositório no GitHub e também deixo aqui na seção um botão o qual ira apresentar mais alguns de meus projetos.<br/> <br/>

                            BEM VINDO!

                        </p>
                    </div>
                </div>
                
                <LinksPortfolio url={urlLinkPortfolio}/>

                <Link to='/portfolio' className='portfolio animation'>CONHEÇA MAIS PROJETOS</Link>                
            </section>

            <section className="canal-youtube">
                <div className='canal-superior'>
                    <div className='superior-title'>
                        <h1>CANAL YOUTUBE</h1>
                        <h3>DICAS & INFORMAÇÕES IMPORTANTES</h3>
                    </div>
                    <div className='superior-inscricao' data-aos='flip-up'>
                        <div className='inscricao-container'>
                            <div className='inscricao-texto'>
                                <span>INSCREVA-SE NO CANAL</span>
                                <a href="https://www.youtube.com/@vocenaoeoprimeiro" target='blank'>YOUTUBE.COM/ZMATTOS</a>
                            </div>
                            <div className='logo-youtube'>
                                <img src={LogoYoutube} alt="Logo do YouTube" />
                            </div>
                        </div>
                        <a className='btn' href="https://www.youtube.com/@vocenaoeoprimeiro" target='blank' >INSCREVER AGORA</a>
                    </div>
                </div>

                <div className='canal-inferior' data-aos='fade-up'>
                    {dbUrls.map(item => <PreviewCanalYoutube key={item} url={item} />)}
                </div>
            </section>

            <Footer />
        </>
        
    );
}
