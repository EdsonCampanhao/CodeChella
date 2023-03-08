import './ListOfOptions.css'

const ListOfOptions = (props) => {

   



    return (
        <>
            <div id='container'>
            <label>Tipo de ingresso</label>
            <select name="select" 
            required
            value={props.valor} 
            onChange={evento=>props.change(evento.target.value)} 
            className='select'>

                {props.options.map((option, index) => <option key={index}>{option}</option>)}


            </select>
            </div>
        </>
    )
}
export default ListOfOptions;