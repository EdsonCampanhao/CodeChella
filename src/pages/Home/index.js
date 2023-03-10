
import '../../App.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import SectionListOfAtraction from '../../components/SectioListOfAtraction';
import SectionWithButton from '../../components/SectionWithButton/index';
import img from '../../components/HeroSection/img/banner.jpg'
import bannerTicket from '../../components/SectionWithButton/img/people.png'
import bannerFooter from '../../components/Footer/img/banner.png'
import { style } from '@mui/system';



const Home=()=>{
  return (
    <div className="Home">

      <Header
        itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}
      />
      <HeroSection
        img={img}
        title={'Boas-vindas ao'}
        text={'#CodeChella2023!'}
      />
      <SectionWithButton
        img={bannerTicket}
        title='<11 e 12 de Março> Aluródromo de São Paulo'
        text='Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'
        hrefOfButton='#'
        textOfButton='Comprar ingresso!'
        button='true'
      />
      <SectionListOfAtraction
        title='/Line-Up/'
        data='SÁBADO <11/03>'
        showPrincipal='System of a DOM'
        showSecundario={['Python Maiden', 'Apollo Client 2001', 'Bon Java', 'NickCallback']}
        showTerceario={['Linkin Promises', 'Fullstack Fighters', 'Papa React', 'Angular in Chains']}
        showQuartenario={['Agnostic Front-end', 'SlipkNode', 'Pink Flutter', 'Kiss']}
      />
      <SectionListOfAtraction 
        data='DOMINGO <12/03>'
        showPrincipal='Lana Del Ploy'
        showSecundario={['Dua Lib','The Backnd','CSS Styles','ArrayAna Grande','DJ Query']}
        showTerceario={['Miley Cypress','The Bootstrap Boys','Json Derulo','CloudPlay','Dev Lovato']}
        showQuartenario={['Kylie MiLOG','Jenkins Brothers','Rubycat Dolls']}
      />
      <Footer
      img={bannerFooter}
      />
    </div>
  );
}
export default Home;