import './TicketAcquired.css'

import Header from "../../../components/Header";

import HeroSection from "../../../components/HeroSection";
import banner from '../../../components/HeroSection/img/ticketBannerII.jpg'

import Footer from '../../../components/Footer'

import TicketQr from "../../../components/Ticket";



const TicketAcquired = (props) => {

  
  

  return (

    

    <section>
      <Header
        itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}
      />
      <HeroSection
        img={banner}
        title={'Seu ingresso está aqui!'}
      />
      <h2 className='congrulation'>
        Uhul, agora sim!
        Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
      </h2>

    <TicketQr
    />

    <Footer
   
    />
    </section>




  )
}
export default TicketAcquired;