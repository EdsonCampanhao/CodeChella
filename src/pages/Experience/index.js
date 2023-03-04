import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import bannerExperience from '../../components/HeroSection/img/bannerExperience.jpg';
import SectionWithButton from "../../components/SectionWithButton";
import accessibilityBanner from "../../components/SectionWithButton/img/accesibilityBanner.png";
import sustainabilityBanner from "../../components/SectionWithButton/img/sustainabilityBanner.png"
import atractionsBanner from "../../components/SectionWithButton/img/atractionsBanner.png"
import Footer from "../../components/Footer";

const Experience = () => {
    return (

        <section className="experience">
            <Header
                itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}

            />
            <HeroSection
                img={bannerExperience}
                title={'A experiência'}
                text={''}
            />
            <SectionWithButton
                img={accessibilityBanner}
                title='Acessibilidade e Inclusão'
                text='Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!'
            />
            <SectionWithButton
                img={sustainabilityBanner}
                title='Sustentabilidade'
                text='Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'
            />
            <SectionWithButton
                img={atractionsBanner}
                title='Atrações'
                text='Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!'
            />
            <Footer />
             </section>
    )
}
export default Experience;