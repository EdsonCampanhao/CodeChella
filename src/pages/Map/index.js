import Header from "../../components/Header";

import HeroSection from "../../components/HeroSection";
import bannerMap from '../../components/HeroSection/img/bannerMap.jpg'

import SeatMap from "../../components/SeatMap";
import imgMap from '../../components/SeatMap/img/seatMap.png';
import imgLegend from '../../components/SeatMap/img/legend.png';

import Article from "../../components/Article/index.js";
import img1 from "../../components/Article/img/im1.png";
import img2 from "../../components/Article/img/im2.png";
import img3 from "../../components/Article/img/im3.png";



const Map = () => {
    return (

        <section className="map">
            <Header
                itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}
            />
            <HeroSection
                img={bannerMap}
                title={'Mapa de Setores'}
                text={''}
            />
            <SeatMap
                imgMap={imgMap}
                imgLegend={imgLegend}
            />
            <Article
                titleOfSection='Mais detalhes sobre os setores:'
                img={img1}
                title='Pista'
                text='Pista convencional, atendida pelos bares e banheiros das laterais do estádio. 
        Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.'
            />
             <Article
                img={img2}
                title='Pista Premiun'
                text='Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.'    />
             <Article
               
                img={img3}
                title='Cadeiras'
                text='Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.'
            />
        </section>

    )
}


export default Map;