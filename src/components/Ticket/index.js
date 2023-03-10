import './Ticket.css'
import logo from './img/logo.png';
import tagImg from './img/closertag.png'
import qrCode from './img/qr-code.png';

import { useParams } from 'react-router-dom';



const TicketQr = (props) => {

    const { name, seat } = useParams();

    return (

        <section className='ticket'>

            <div className='logo'>
                <div className='element1' style={{backgroundImage:`url(${logo})`}} ></div>
                <div className='element2' style={{backgroundImage:`url(${tagImg})`}}></div>
            </div>

            <div className='qrCode' style={{backgroundImage:`url(${qrCode})`}}>  </div>

           

            <div className='infos'> 
            <h4>{name.toUpperCase()}</h4>
                <p>Ingresso Cortesia</p>
                <p>{`Setor: ${seat}`}</p>
                <p>Data: 11/03</p>
                <p>Local: São Paulo-sp</p>
            </div>

        </section>

    )
}



export default TicketQr;