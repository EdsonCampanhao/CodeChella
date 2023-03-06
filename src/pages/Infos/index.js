import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


import HeroSection from "../../components/HeroSection";
import infosBanner from '../../components/HeroSection/img/concertBanner.jpg';

const Infos =()=>{
    return(
        <section >
             <Header
                itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}
            />
            <HeroSection
                img={infosBanner}
                title={'Informações Gerais'}
                text={''}
            />
            <Faq/>

        <Footer/>

        </section>
    )
}
export default Infos;