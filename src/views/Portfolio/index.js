import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

// My Imports
import './style.css';
import Navbar from '../../components/Navbar';
import LinksPortfolio from '../../components/LinksPortfolio';
import Footer from '../../components/Footer';

// MY IMAGES PRIMEIRO PROJETO
import videoPrimeiroprojeto from '../../assets/portfolioVideo.mp4';

// MY IMAGES SEGUNDO PROJETO
import primProjImg001 from '../../assets/portfolio-img001.png';
import primProjImg002 from '../../assets/portfolio-img002.png';
import primProjImg003 from '../../assets/portfolio-img003.png';
import primProjImg004 from '../../assets/portfolio-img004.png';
import primProjImg005 from '../../assets/portfolio-img005.png';
import primProjImg006 from '../../assets/portfolio-img006.png';

// MY IMAGES TERCEIRO PROJETO
import segProjImg001 from '../../assets/portfolio-seg001.png';
import segProjImg002 from '../../assets/portfolio-seg002.png';
import segProjImg003 from '../../assets/portfolio-seg003.png';
import segProjImg004 from '../../assets/portfolio-seg004.png';
import segProjImg005 from '../../assets/portfolio-seg005.png';
import segProjImg006 from '../../assets/portfolio-seg006.png';

// MY IMAGES QUARTO PROJETO
import terProjImg001 from '../../assets/portfolio-terc001.png';
import terProjImg002 from '../../assets/portfolio-terc002.png';
import terProjImg003 from '../../assets/portfolio-terc003.png';
import terProjImg004 from '../../assets/portfolio-terc004.png';
import terProjImg005 from '../../assets/portfolio-terc005.png';
import terProjImg006 from '../../assets/portfolio-terc006.png';


export default function Portfolio(){

    //URL PORTFOLIO
    const urlLinkPortfolio001 = 'https://github.com/zezerinomattos/loja_nanda_fashion';

    const urlLinkPortfolio002 = 'https://github.com/zezerinomattos/unitedsoftware';

    const urlLinkPortfolio003 = 'https://nandafashionn.com/';

    const urlLinkPortfolio004 = 'https://github.com/zezerinomattos/digital_waiter-projeto-Full-Stack';

    // URL MAIS 
    const urlLinkMais001 = 'https://github.com/zezerinomattos/todo-projeto-fullstack-node-react';
    const urlLinkMais002 = 'https://github.com/zezerinomattos/ocornnerconsultoria';
    const urlLinkMais003 = 'https://github.com/zezerinomattos/bot_whatsApp_python';
    const urlLinkMais004 = 'https://github.com/zezerinomattos/Sistema-Controle-Vendas-Em-Java';
    const urlLinkMais005 = 'https://github.com/zezerinomattos/ToDo-Mobile-ReactNative';
    const urlLinkMais006 = 'https://github.com/zezerinomattos';
    const urlLinkMais007 = 'https://github.com/zezerinomattos/Lingobotix_app';

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <>
            <header className='header-portfolio'>
                <Navbar />   
                <div className='header-textos'>
                    <h1>PORTFÓLIO</h1>
                    <span>Preparei esta seção com alguns de meus projetos.</span>
                </div>
            </header>

            <section data-aos='fade-up' className='primeiro-projeto'>
                <div className='projeto-prim-container'>
                    <h2>Digital Waiter projeto Full-Stack Node - Next.js - React Native </h2>
                    <p>
                        O Digital Waiter é um projeto completo, desenvolvido com o objetivo de proporcionar uma melhor gestão de pedidos em restaurantes. Com um aplicativo móvel para garçons, um sistema web para a cozinha e caixa, o projeto permite que os pedidos dos clientes sejam registrados de forma ágil e precisa, melhorando a eficiência do estabelecimento. <br/> <br/>

                        O Digital Waiter oferece diversas funcionalidades para uma melhor gestão dos pedidos em restaurantes, como:<br/><br/>

                        Registro de pedidos pelo garçom via aplicativo móvel <br/>
                        Integração automática com o sistema web para a cozinha e caixa<br/>
                        Controle dos pedidos em aberto e finalizados<br/>
                        Custo mais baixo para o estabelecimento<br/>
                        Agilidade e precisão na gestão de pedidos<br/>
                        Cadastro de usuário<br/>
                        Cadastro de Produtos<br/>
                        Loging<br/>
                        Segurança criptografada<br/>
                        Entre outras<br/>
                    </p>

                    <p>
                        O projeto foi desenvolvido utilizando tecnologias modernas e robustas, com o objetivo de garantir a qualidade e desempenho:<br/><br/>

                        Node.js<br/>
                        TypeScript<br/>
                        PostgreSQL<br/>
                        Next.js<br/>
                        React.js<br/>
                        Sass<br/>
                        React Native<br/>
                    </p>
                
                    <div className='img-superior'>
                        <div className='video-digital-waiter'>
                            <video controls>
                                <source src={videoPrimeiroprojeto} type="video/mp4" />
                                Seu navegador não suporta a exibição de vídeos.
                            </video>
                        </div>
                    </div>

                    <div className='preview-git'>
                        <span>
                            Convido você a conhecer o código clicando no link (Leia Mais...) do Overview do projeto no meu repositório remoto GitHub.
                        </span>
                        <LinksPortfolio url={urlLinkPortfolio004}/>
                    </div>
                </div>
            </section>

            <section data-aos='fade-up' className='primeiro-projeto'>
                <div className='projeto-prim-container'>
                    <h2>Site de vendas React.js + Firebase + Bootstrap</h2>
                    <p>
                    Apresento-lhes um e-commerce inovador, que permite aos usuários visualizar com detalhes os produtos disponíveis e finalizar suas compras diretamente com o vendedor através da integração do aplicativo de mensagens WhatsApp. Esse projeto foi desenvolvido com o objetivo de oferecer uma experiência de compra simples e eficiente para os usuários. <br/> <br/>

                        Por outro lado o vendedor pode fazer: <br/>
                        [🔑] Autenticação de Usuários <br/>
                        [📧] Recuperação de senha com envio de e-mail automático <br/>
                        [👤] Cadastro de Usuários <br/>
                        [📝] Publicar, editar, remover e pesquisar produtos para usuários logados. <br/>
                        [🔎] Pesquisa de produtos para usuários visitantes <br/>
                        [👀] Quantidade de Visualizações de um Produtos <br/>
                        [📷] Upload de imagem <br />
                        [📲] Layout responsivo (se ajusta ao tamanho da tela) 
                    </p>
                
                    <div className='img-superior'>
                        <div className='img001'>
                            <img src={primProjImg001} alt="" />
                        </div>
                        <div className='img002'>
                            <img src={primProjImg002} alt="Projetos" />
                        </div>
                        <div className='img001'>
                            <img src={primProjImg003} alt="Projetos" />
                        </div>
                    </div>
                    <div className='img-inferior'>
                        <div className='img001'>
                            <img src={primProjImg004} alt="Projetos" />
                        </div>
                        <div className='img001 centro'>
                            <img src={primProjImg005} alt="Projetos" />
                        </div>
                        <div className='img001'>
                            <img src={primProjImg006} alt="Projetos" />
                        </div>
                    </div>

                    <div className='preview-git'>
                        <span>
                            Convido você a conhecer o código clicando no link (Leia Mais...) do Overview do projeto no meu repositório remoto GitHub.
                        </span>
                        <LinksPortfolio url={urlLinkPortfolio001}/>
                    </div>
                </div>
            </section>

            <section className='segundo-projeto'>
                <div className='projeto-seg-container'>
                        <h2>Site Corporativo React.js</h2>
                        <p>
                            Apresento-lhes um site corporativo impactante para uma empresa prestadora de serviços, que oferece uma apresentação elegante e criativa da empresa e de seus serviços. Com um design moderno e intuitivo, este site é a plataforma ideal para apresentar a empresa ao mundo e atrair novos clientes. Além disso, o site foi construído com a tecnologia avançada React.js, garantindo uma experiência de usuário rápida e fluida. <br /> <br/>

                            [📧] Projeto feito em React.js <br />
                            [📝] Layout desenhado e prototipado no Figma <br />
                            [🔎] Fácil navegação <br /> 
                            [👀] Estrutura com Clean Code para fácil manutenção <br />
                            [📷]Imagens trabalhadas no Photoshop <br />
                            [📲] Layout responsivo (se ajusta ao tamanho da tela) <br />
                        </p>
                    
                        <div className='img-superior'>
                        <div className='img001'>
                            <img src={segProjImg001} alt="" />
                        </div>
                        <div className='img002'>
                            <img src={segProjImg002} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={segProjImg003} alt="" />
                        </div>
                    </div>
                    <div className='img-inferior'>
                        <div className='img001'>
                            <img src={segProjImg004} alt="" />
                        </div>
                        <div className='img001 centro'>
                            <img src={segProjImg005} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={segProjImg006} alt="" />
                        </div>
                    </div>

                    <div className='preview-git'>
                        <span>
                            Convido você a conhecer o código clicando no link (Leia Mais...) do Overview do projeto no meu repositório remoto GitHub.
                        </span>
                        <LinksPortfolio url={urlLinkPortfolio002}/>
                    </div>
                        
                </div>
            </section>

            <section data-aos='fade-up' className='terceiro-projeto'>
                <div className='projeto-ter-container'>
                        <h2>Loja Online Wordpress</h2>
                        <p>
                            Apresento-lhes um projeto de e-commerce desenvolvido utilizando a plataforma Wordpress, que oferece uma experiência de compra completamente automatizada e sem a necessidade de interação com um vendedor. Com uma interface intuitiva e fácil de usar, este projeto demonstra minhas habilidades em desenvolvimento de lojas online e automação de processos de compra. <br /> <br/>

                            [📧] Atendimento de forma automatizada e 24h por dia <br/>
                            [📝] Integração com Mercado Pago <br/>
                            [🔎] Fácil navegação <br/>
                            [👀] Landing Page criativa e pensada para atrair clientes <br/>
                            [📷]Imagens trabalhadas no Photoshop <br/>
                            [📲] Layout responsivo (se ajusta ao tamanho da tela) <br/>
                        </p>
                    
                        <div className='img-superior'>
                        <div className='img001'>
                            <img src={terProjImg002} alt="" />
                        </div>
                        <div className='img002'>
                            <img src={terProjImg001} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={terProjImg003} alt="" />
                        </div>
                    </div>
                    <div className='img-inferior'>
                        <div className='img001'>
                            <img src={terProjImg004} alt="" />
                        </div>
                        <div className='img001 centro'>
                            <img src={terProjImg005} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={terProjImg006} alt="" />
                        </div>
                    </div>

                    <div className='site-integra'>
                        <span>
                            Convido você a conhecer a loja na íntegra clicando no link (Leia Mais...).
                        </span>
                        <a href={urlLinkPortfolio003}>Leia Mais...</a>
                    </div>
                        
                </div>
            </section>

            <section data-aos='fade-up' className='mais-projetos'>
                <h2>Veja Mais Projetos</h2>
                <span>
                    Eu convido você a conhecer mais sobre os projetos em meu portfólio. Para evitar que <br/> meu site fique grande e pesado, estou compartilhando com você apenas uma seleção dos meus <br/> projetos no GitHub. Para ver ainda mais projetos, basta clicar no link ao final que o levará <br/> diretamente à raiz de meu repositório. Aqui você encontrará uma visão geral de cada um deles.
                </span>
                <div className='mais-overviews'>
                    <LinksPortfolio url={urlLinkMais007}/>
                    <LinksPortfolio url={urlLinkMais001}/>
                    <LinksPortfolio url={urlLinkMais005}/>
                    <LinksPortfolio url={urlLinkMais002}/>
                    <LinksPortfolio url={urlLinkMais003}/>
                    <LinksPortfolio url={urlLinkMais004}/>
                    <LinksPortfolio url={urlLinkMais006}/>
                </div>
            </section>

            <Footer />
        </>
    );
}