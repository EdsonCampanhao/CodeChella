import './Footer.css'
import { BsTwitter } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs'
import logo from './img/logo.png'

const Footer = (props) => {
    return (
        <section className='footer'>
            {props.img && <div className='img' style={{backgroundImage: `url(${props.img})`}}>imagem ilustrativa</div>}
            

            <div className='container'>
                <img src={logo} />
                <div>
                    <p>Acesse nossas redes</p>
                    <div className='icons'>
                        <BsWhatsapp size={32} />
                        <BsTwitch size={32} />
                        <BsInstagram size={32} />
                        <BsTwitter size={32} />
                    </div>
                </div>
            </div>
            <p> projeto desenvolvido no desafio Alura </p>
        </section>
    )
}
export default Footer;