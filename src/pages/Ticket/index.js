

import  Form  from '../../components/Form';
import Header from '../../components/Header'

import HeroSection from '../../components/HeroSection';
import ticketBanner from '../../components/HeroSection/img/ticketBanner.jpg'


import Footer from '../../components/Footer'

const Ticket = (props) => {
    return (
        <section>

            <Header
                itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}
            />
            <HeroSection 
            img={ticketBanner}
            title='Garanta seu Ingresso'
            />
            <Form 
             options={['','Pista Premium','Pista comum','Cadeiras térreo','Cadeiras Superiores']}
             />
             <Footer/>



        </section>

    )
}
export default Ticket;