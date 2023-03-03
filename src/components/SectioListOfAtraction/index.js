import './SectionListOfAtraction.css'


const SectionListOfAtraction = (props) => {
    return (
        <section className='atraction-list'>

            <h2>{props.title}</h2>

           <div className='container'> <div className='detail'></div> <div className='data'>{props.data}</div> <div className='detail'></div></div>
            <div className='shows'>
            <h3>{props.showPrincipal}</h3>
            <div>{props.showSecundario.map((show,index)=><h4 key={index}> {show} </h4>)}</div>
            <div>{props.showTerceario.map((show,index)=><h5 key={index}> {show} </h5>)}</div>
            <div>{props.showQuartenario.map((show,index)=><h6 key={index}> {show} </h6>)}</div>
            </div>

        </section>
   
)
}

export default SectionListOfAtraction