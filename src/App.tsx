import React from 'react';
import Slider from "react-slick";

import Header from './components/header';
import Aligner from './components/aligner';
import SmallCard from './components/smallCard';
import Container from './components/container';

import bannerImage from './img/new-banner.svg';
import cloudIcon from './img/cloudIcon.svg';
import headsetIcon from './img/headsetIcon.svg';
import signalIcon from './img/signalIcon.svg';
import shieldIcon from './img/shieldIcon.svg';
import logoBackground from './img/logo-back.svg';
import smartphoneImage from './img/smartphone.svg';
import basicoPlan from './img/basico.svg';
import intermediarioPlan from './img/intermediario.svg';
import completoPlan from './img/completo.svg';
import empresarialPlan from './img/empresarial.svg';
import appCombate from './img/app-combate.svg';
import appGloboplay from './img/app-globoplay.svg';
import appPremiere from './img/app-premiere.svg';
import appTelecine from './img/app-telecine.svg';
import contractImg from './img/notebook.svg';
import cardPlan from './img/card-plan.svg';
import whatsappIcon from './img/whatsapp-btm.svg';

import './style/content.css';
import Testimonial from './components/testimonial';
import Footer from './components/footer';

function App() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <Header/>
      <Container style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "97vh" }} className='banner-container'>
        <Aligner direction="vertical" style={{ height: "100%", justifyContent: "center", alignItems: "flex-start", paddingLeft: "5%" }}>
          <img src={cardPlan} alt="card-plan" className='plan-image' />
        </Aligner>
      </Container>

      <Aligner direction="horizontal">
        <SmallCard iconPath={cloudIcon} message="Instalação com roteador grátis."/>
        <SmallCard iconPath={headsetIcon} message="Suporte personalizado, 24 horas por dia."/>
        <SmallCard iconPath={signalIcon} message="Wi-fi que pega na casa toda!"/>
        <SmallCard iconPath={shieldIcon} message="Navegação rápida e segura."/>
      </Aligner>

      <Container style={{ backgroundColor: "#F56004" }} className='plans-container' id='plans'>

        <b>Temos o plano ideal para você!</b>

        <Aligner direction="horizontal">
          <img src={basicoPlan} alt="basico-plan" className='plan-image' />
          <img src={intermediarioPlan} alt="intermediario-plan" className='plan-image'/>
          <img src={completoPlan} alt="completo-plan" className='plan-image'/>
          <img src={empresarialPlan} alt="empresarial-plan" className='plan-image'/>
        </Aligner>

        <span>Descubra os melhores combos para turbinar  sua diversão com filmes, jogos e navegação na internet!</span>

        <img src={logoBackground} alt="logo-background" className="logo-background" />
        <img src={smartphoneImage} alt="smartphone-image" className="smartphone-image" />
      </Container>

      <Aligner direction="horizontal">
        <a href="#" className='button-contact'>Assine já, clicando aqui</a>
      </Aligner>

      <Container className='apps-container'>
        <b>Conheça os apps disponíveis para assinatura</b>

        <Aligner direction="horizontal">
          <img src={appPremiere} alt="app-premiere" className='app-image' />
          <img src={appCombate} alt="app-combate" className='app-image' />
          <img src={appGloboplay} alt="app-globoplay" className='app-image' />
          <img src={appTelecine} alt="app-telecine" className='app-image' />
        </Aligner>
      </Container>

      <Aligner direction="horizontal">
        <a href="#" className='button-contact'>Saiba mais clicando aqui</a>
      </Aligner>

      <Container className='infomercial-container' style={{ backgroundColor: "#2A2A2A" }}>
        <h2>Por que escolher a Jactos?</h2>

        <b>Velocidade e Estabilidade</b>
        <p>Nossos planos de internet de fibra óptica garantem velocidades impressionantes e uma conexão estável. Com a Jactos Fibra, você pode transmitir seus filmes favoritos em alta definição, participar de videoconferências sem interrupções e jogar online com latência mínima.</p>
        <b>Atendimento ao Cliente Dedicado</b>
        <p>Valorizamos cada um de nossos clientes. Nossa equipe de suporte está sempre pronta para ajudar, garantindo que você tenha a melhor experiência possível. Desde a instalação até o suporte técnico, estamos aqui para resolver suas dúvidas e problemas rapidamente.</p>
        <b>Planos Flexíveis para Todos os Perfis</b>
        <p>Oferecemos uma variedade de planos para atender a diferentes necessidades. Se você é um usuário casual, um gamer ou um profissional que trabalha de casa, temos a solução ideal para você. Escolha o plano que mais se adapta ao seu estilo de vida  e aproveite uma internet rápida e confiável.</p>

        <h2>Benefícios de contratar nossos planos</h2>

        <p><b>Internet de Alta Velocidade: </b>Conexões que vão de 100 a 1.000 Mbps para que você tenha sempre a melhor performance.</p>
        <p><b>Tecnologia de Ponta: </b>Utilizamos a mais moderna tecnologia de fibra óptica para garantir uma conexão robusta e rápida.</p>

        <p>Estamos empenhados em transformar a sua experiência de navegação. Junte-se a nós e descubra como uma conexão de internet de qualidade pode mudar a sua rotina. Solicite uma cotação hoje mesmo e conecte-se ao futuro com a JACTOS!</p>
      </Container>

      <Container className='testimonial-container'>
        <b>O que dizem sobre a Jactos Fibra:</b>

        <Slider {...sliderSettings} className='testimonial-slider'>
          <Testimonial name="João Pereira" testimonial="A Jactos Fibra transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
          <Testimonial name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
          <Testimonial name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a Jactos Fibra superou minhas expectativas." />
          <Testimonial name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
          <Testimonial name="João Pereira" testimonial="A Jactos Fibra transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
          <Testimonial name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
          <Testimonial name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a Jactos Fibra superou minhas expectativas." />
          <Testimonial name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
        </Slider>
      </Container>

      <Container className='contrato-container' style={{ backgroundColor: "#2B2B2B" }}>
        <Aligner direction='horizontal'>
          <Aligner direction='vertical'>
            <h2>Autoatendimento para clientes</h2>
            <span>Contrate seu plano com poucos cliques!</span>
            <a href="#" className="contract-link">Clique aqui</a>
          </Aligner>
          <img src={contractImg} alt="contract-img" className="contract-img" />
        </Aligner>
      </Container>

      <a href="#" className='whatsapp-button'>
        <img src={whatsappIcon} alt="whatsapp-icon" className='whatsapp-icon' />
      </a>

      <Footer/>
    </React.Fragment>
  );
}

export default App;