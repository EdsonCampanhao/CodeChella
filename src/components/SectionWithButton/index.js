import './SectionWithButton.css'
import icon from   './img/icon.png'


const SectionWithButton=(props)=>{

  

    return(

        <section className='sw-button' >
            
            <div className='img'  style={{backgroundImage: `url(${props.img})`}}>
            <img src={props.img} alt='illustrative image'/>
            </div>

            <div className='txt'>
            <h2>{props.title}</h2>

            <p>{props.text}</p>
           
           { props.button == 'true' && 
           <a href={props.hrefOfButton}> {props.textOfButton} 
            <img alt='ticket icon' src={icon}/>
            </a>
           }
        
            
        
           
            </div>
        </section>
    )
}

export default SectionWithButton