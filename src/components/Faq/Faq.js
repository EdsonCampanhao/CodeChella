import './Faq.css'
import { IoMdArrowDropdown } from 'react-icons/io';

const Faq = () => {

    const open = (event) => {


         if(event.target.classList.contains('faq__icone')){
            
                const classListOfAnswer = event.target.nextSibling.classList;

                

                const iconOfArrow = event.target.classList;

               classListOfAnswer.toggle('desabled');
                iconOfArrow.toggle('invert');
       }else{
        console.log(event)
        const icon = event.target.parentNode;

        icon.classList.toggle('invert');
        icon.nextSibling.classList.toggle('desabled')
       }

    }


    return (
        <section className='faq'>
            <h2 className='faq__title'> Perguntas frequentes:</h2>
            <div className="faq__cards">
                <article className="faq__info">
                    <h3 className="faq__titulo">Quais serão as atrações?</h3>
                    <IoMdArrowDropdown onClick={open} size={32} className='faq__icone' />
                    <p className="faq__resposta desabled">Teremos dois dias de shows, o primeiro (11/03)
                        com bandas de rock, e o segundo (12/03)
                        com bandas pop. Confira o line-up em detalhes clicando neste link! </p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Qual é a classificação etária?
                    </h3>
                   <IoMdArrowDropdown onClick={open} size={32} className='faq__icone' />
                    <p className="faq__resposta desabled">
                        A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Quais são os setores disponíveis?

                    </h3>
                   <IoMdArrowDropdown onClick={open} size={32} className='faq__icone' />
                    <p className="faq__resposta desabled">Pista Premium
                        Pista Comum
                        Cadeiras térreo
                        Cadeiras superiores
                        Rampas</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Quais são os itens proibidos?

                    </h3>
                   <IoMdArrowDropdown onClick={open} size={32} className='faq__icone' />
                    <p className="faq__resposta desabled">Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas,
                        objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas,
                        revistas, jornais, livros e copo térmico ou similares.</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Quem tem direito a meia-entrada?

                    </h3>
                    <IoMdArrowDropdown onClick={open} size={32} className='faq__icone' />
                    <p className="faq__resposta desabled">De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.</p>
                </article>
            </div>
        </section>
    )
}

export default Faq