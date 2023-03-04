import './Header.css'
import './MenuIcon.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const openMenu = (event) => {
        const container = document.querySelector('.lista');
        if (event.target.attributes.length > 1) {
            event.target.nextSibling.classList.toggle('desabled')
            event.target.classList.toggle('on')
            container.classList.toggle('on')
        } else {
            event.target.parentNode.nextSibling.classList.toggle('desabled');
            event.target.parentNode.classList.toggle('on');
            container.classList.toggle('on')
        }
    }



    return (
        <section className='header'>
            <div className="lista">

                <div className="menu">

                    <div className='menu-hamburguer' data-menu='2' onClick={openMenu}>
                        <div >
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <nav className='desabled'>
                        <ul className="lista__lista ">
                            {props.itens.map((item, index) => <Link to={`/${item}`} key={index}><li key={index}>{item}</li></Link>)}
                        </ul>
                    </nav>
                </div>
            </div>
            
            <Link to={'/'}>
                <div className='logo'>
                    <img className='alt' alt='icone logo'></img>
                </div>
            </Link>
        </section >
    )
};

export default Header;