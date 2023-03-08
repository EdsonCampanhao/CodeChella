import './Form.css'
import TextField from './TextField'
import { useState } from 'react'
import Button from './Button'
import ListOfOptions from './ListOfOptions'
import Ticket from '../../pages/Ticket'



const Form = (props) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataDeNascimento, setdataDeNascimento] = useState('');
    const [typeOfTicket,setTypeOfTicket] = useState('');


    const aoSalvar = (evento) => {
        
        evento.preventDefault()

        console.log(props)

        let orçamento = {
            nome: nome,
            email: email,

            dataDeNascimento: dataDeNascimento,

            typeOfTicket: typeOfTicket,
        }

        console.log(orçamento)
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} >
                <h2>Preencha o formulário a seguir:</h2>
                <TextField
                    type='text'
                    name="name"
                    label='Nome'
                    obrigatorio={true}
                    placeholder='digite seu nome completo'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    type='email'
                    name="email"
                    label='Email'
                    obrigatorio={true}
                    placeholder='ex: joão@gmail.com'
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <div className='container'>
                <ListOfOptions
                    options={props.options}
                    valor={typeOfTicket}
                    change={valor=>setTypeOfTicket(valor)}
                />
                <TextField
                    type="date"
                    name="date"
                    label='Data de nascimento'
                    placeholder=''
                    obrigatorio={true}
                    valor={dataDeNascimento}
                    aoAlterado={valor => setdataDeNascimento(valor)}
                />
                </div>



                <Button 
                type='submit' 
                >Avançar!</Button>
            </form>
        </section>
    )
}

export default Form