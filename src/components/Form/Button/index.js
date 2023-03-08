import'./Button.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import TicketAcquired from '../../../pages/Ticket/TicketAcquired'





const Button=(props)=>{
    return(
        
        <button className='botao' 
       
        type={props.type}> {props.children} <AiOutlineArrowRight size={32} className='icon'/> 
        </button>
    )
}

export default Button