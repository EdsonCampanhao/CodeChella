import'./Button.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

const changeOption=(e)=>{

    console.log(e)
    e.props.change(e.target.value)

}



const Button=(props)=>{
    return(
        <button className='botao' 
        value={props.valor} 
        onChange={(e)=>{props.change(e.target.textContent)
        console.log(e)
        }} 
        type={props.type}> {props.children} <AiOutlineArrowRight size={32} className='icon'/> 
        </button>
    )
}

export default Button