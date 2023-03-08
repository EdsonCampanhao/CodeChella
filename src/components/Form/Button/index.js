import'./Button.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { blueGrey } from '@mui/material/colors'

const Button=(props)=>{
    return(
        <button className='botao' type={props.type}> {props.children} <AiOutlineArrowRight size={32} className='icon'/> </button>
    )
}

export default Button