
import './CampoTexto.css'

const TextField= (props)=>{

    const aoDigitar=(evento)=>{
       props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
        <label htmlFor={props.label}>{props.label}</label>
        <input  value={props.valor} id={props.label} accept={props.accept} type={props.type} required={props.obrigatorio} name={props.name} onChange={aoDigitar} placeholder={`${props.placeholder}...`}></input>
        </div>
        
        )
}
export default TextField;