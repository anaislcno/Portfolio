import { NavLink } from 'react-router-dom'
import './Welcome.scss'
import Header from "../Header";

function Welcome() {
  return (
    <div className='home'>
      <Header />
      <div className='welcome'>
        <div className='welcome__infos'>
          <h1 className='welcome__title'>BONJOUR!</h1>
          <h2 className='welcome__text'>Je suis Anaïs, développeuse front-end junior, bienvenue dans mon travail, quoi mettre?</h2>
        </div>
        <div className='links'>
          <NavLink className='links__unit' to="/">En savoir plus</NavLink>
          <NavLink className='links__unit' to="/">Me contacter</NavLink>
        </div>
      </div>
      <div>
          <p>FUTURE TRANSITION ICI????</p>
      </div>
    </div>
  )
}

export default Welcome 