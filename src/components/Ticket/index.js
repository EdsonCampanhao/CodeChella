import './Ticket.css'
import logo from './img/logo.png';
import qrCode from './img/qr-code.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';




const TicketQr = (props) => {


    const [name, setName] = useState('')
    const [sector, setSector] = useState('')

    function changeDatas(name,sector){

    

    }

 const loadData = (name,sector) => {
    
    setName(name);
    setSector(sector);

   
    }

    const {id,di}= useParams();

    return (

        <section className='ticket'>


            <img src={logo} alt='logo'></img>
            <img src={qrCode} alt='Código qr' ></img>

            <h4>{name}</h4>

            <div className='infos'>
                <p>{di}</p>
                <p>{`Setor: ${id}`}</p>
                <p>Data: 11/03</p>
                <p>Local: São Paulo-sp</p>

            </div>

        </section>

    )
}



export default TicketQr;