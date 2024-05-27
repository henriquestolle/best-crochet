import './CSS/LandingPage.css'
import logo_best_crochet from '../Components/Assets/logo-best-crochet.png'
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div>
        <h1>Best Crochet</h1>
        <hr />
      </div>
      <div className='img-logo'>
        <img src={logo_best_crochet} alt="logo-best-crochet"/>
      </div>
      <ul className="bottons">
        <li><Link to='/shop'>Visitar Loja</Link></li>
        <li><a href="https://wa.me/47988883180">Tirar Duvidas</a></li>
        <li><a href="https://www.instagram.com/bestcrochetjoinville/">Rede Social</a></li>
      </ul>
    </div>
  )
}

export default LandingPage