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
        "https://www.youtube.com/embed/Cy1AMzxTqH8",
        "https://www.youtube.com/embed/GsOBfuYXRa8",
        "https://www.youtube.com/embed/mCljajDDJTk",
        "https://www.youtube.com/embed/bHfd_2FuN6s", 
        "https://www.youtube.com/embed/VICqoVfTwgw"    
    ];

    const dbUrlsCell = [
        "https://www.youtube.com/embed/wfOyNFMs2HI",
        "https://www.youtube.com/embed/Cy1AMzxTqH8",
        "https://www.youtube.com/embed/mCljajDDJTk"
    ]

    const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

    useEffect(() => {
        setWidthCarroselSkill(carroselSkill.current?.scrollWidth - carroselSkill.current?.offsetWidth);

        Aos.init({duration: 2000});
        // console.log(carroselSkill.current?.scrollWidth, carroselSkill.current?.offsetWidth)image.png

        //Tamnho da tela para section youtube
        function handleResize() {
            setTamanhoTela(window.innerWidth);
        }
        //Tamnho da tela para section youtube
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

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
                        Sou um desenvolvedor altamente motivado e comprometido com meu crescimento profissional e desenvolvimento de habilidades. Com uma paixão por tecnologia, estou sempre atento às últimas tendências e evoluções no mercado, buscando superar constantemente meus desafios. <br/>

                        Com uma sólida base em Front-End, incluindo HTML, CSS, JavaScript, React, TypeScript, Bootstrap, Wordpress e mais, além de conhecimento em linguagens Back-End, como Node.js, Python e Java, e experiência em bancos de dados como MYSQL, PostgresSQL e MongoDB. Além disso, tenho experiência em plataformas como Firebase e AWS.                        
                    </p>
                    <p>
                        Como QA Analyst Tester, possuo conhecimento em testes funcionais, análise crítica, geração de massas de dados, execução de testes, coleta de evidências e integração com ALM. Além disso, tenho habilidade em utilizar ferramentas como Celenium e Cypress para realizar testes automatizados eficientes. <br/> <br/>

                        Estou ansioso para aplicar minhas habilidades e conhecimento em projetos desafiadores, trabalhando em equipe para alcançar resultados incríveis.

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
                                <SkilSpeener porcentagem={70} linguagemA={'JavaScript'} />
                                <SkilSpeener porcentagem={70} linguagemA={'React.js'} />
                                <SkilSpeener porcentagem={60} linguagemA={'Firebase'} />
                                <SkilSpeener porcentagem={50} linguagemA={'Jquery'} />
                                <SkilSpeener porcentagem={40} linguagemA={'Node.js'} />
                                <SkilSpeener porcentagem={60} linguagemA={'Wordpress'} />
                                <SkilSpeener porcentagem={40} linguagemA={'React Native'} />
                                <SkilSpeener porcentagem={30} linguagemA={'TypeScript'} />
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
                            Seja bem-vindo ao meu portfólio! Aqui, você terá a oportunidade de conhecer um pouco mais sobre o meu trabalho a partir dos projetos selecionados. Embora eu tenha mais de 50 projetos em meu repositório no GitHub, onde mais de 30 deles estão disponíveis para visualização pública, nesta seção, eu destacarei apenas projetos front-end e full stack que apresentam uma demonstração concreta do meu trabalho e habilidades. Por favor, note que, para evidenciar o meu trabalho como programador, não incluirei projetos apenas de back-end ou layouts criados com Figma ou AdobeXD. Para ter acesso a um amplo conjunto de meus projetos, clique no link "Leia Mais" do meu repositório no GitHub ou use o botão "Ver mais projetos" disponível na seção.

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
                    {
                        tamanhoTela > 1024 ? dbUrls.map(item => <PreviewCanalYoutube key={item} url={item} />)
                        :
                        dbUrlsCell.map(item => <PreviewCanalYoutube key={item} url={item} />)
                    }
                </div>

                <a className='btn-veja-mais' href="https://www.youtube.com/@vocenaoeoprimeiro" target='blank' >VEJA MAIS</a>
            </section>

            <Footer />
        </>
        
    );
}
