import './HeroSection.css'


const HeroSection = (props) => {

    return (

        <section className='hero-section' >

            <div className='hero-img' style={{ backgroundImage: `url(${props.img})` }}>

                < div className='text' >
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>

        </section >


    )

}

export default HeroSection