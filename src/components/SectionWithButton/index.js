import './SectionWithButton.css'
import PeopleM from './img/people.png'
import icon from   './img/icon.png'


const SectionWithButton=(props)=>{

    return(

        <section className='sw-button'>
            
            <div className='img'>
            <img src={PeopleM} alt='illustrative image'/>
            </div>

            <div className='txt'>
            <h2>{props.title}</h2>

            <p>{props.text}</p>

            <a href={props.hrefOfButton}> {props.textOfButton} <img alt='ticket icon' src={icon}/></a>
            </div>
        </section>
    )
}

export default SectionWithButton