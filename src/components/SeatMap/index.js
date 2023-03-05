import './SeatMap.css';

const SeatMap=(props)=>{
    return(
        <section className='seat-map'>

            <div style={{backgroundImage: `url(${props.imgMap})`}}><img alt='Imagem do Mapa' /></div>

            <img src={props.imgLegend} alt='azul: pista premiun ; rosa: pista comum; verde: cadeiras terreo; azul escuro: cadeiras superiores ; azul com icone cadeirante:rampas '  />


        </section>


    )
}
export default SeatMap;