import './ListOfOptions.css'

const ListOfOptions = (props) => {
    return (
        <>
            <div id='container'>
            <label>Tipo de ingresso</label>
            <select name="select" className='select'>

                {props.options.map((option, index) => <option key={index} required value="option">{option}</option>)}


            </select>
            </div>
        </>
    )
}
export default ListOfOptions;