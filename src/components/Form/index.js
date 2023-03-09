import './Form.css'
import TextField from './TextField'
import { useState } from 'react'
import Button from './Button'
import ListOfOptions from './ListOfOptions'
import {  useNavigate, useParams } from 'react-router-dom'

const Form = (props) => {

    const navigate=useNavigate();



    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataDeNascimento, setdataDeNascimento] = useState('');
    const [typeOfTicket,setTypeOfTicket] = useState('');


    const aoSalvar = (evento) => {
        
        console.log(props)

        let data = {
            nome: nome,
            email: email,

            dataDeNascimento: dataDeNascimento,

            typeOfTicket: typeOfTicket,
        }

        localStorage.setItem('infoClient',JSON.stringify(data))

        navigate(`/ingressocomprado/${data.nome}/${data.email}`)
    }
    return (
    
        <section className='formulario' method="post"  action="/ingressocomprado">
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