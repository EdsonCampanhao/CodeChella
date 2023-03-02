
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionWithButton from './components/SectionWithButton/index'


function App() {
  return (
    <div className="App">

      <Header 
        itens={['A experiência', 'Mapa de Setores', 'Informações', 'Ingresso']}
        href={['#', '#', '#', '#']}
      />
      <HeroSection />
      <SectionWithButton 
       
        title='<11 e 12 de Março> Aluródromo de São Paulo'
        text='Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'
        hrefOfButton='#'
        textOfButton='Comprar ingresso!'
      />
    </div>
  );
}

export default App;
