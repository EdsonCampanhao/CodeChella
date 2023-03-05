import './Article.css'

const Article=(props)=>{

  

    return(

        <section className='article' >

            {props.titleOfSection &&
            <h2 className='title'> {props.titleOfSection
            } </h2>
            }
            <div className='img'  style={{backgroundImage: `url(${props.img})`}}>
            <img src={props.img} alt='illustrative image'/>
            </div>

            <div className='txt'>
            <h2>{props.title}</h2>

            <p>{props.text}</p>
           
           
        
            
        
           
            </div>
        </section>
    )
}

export default Article