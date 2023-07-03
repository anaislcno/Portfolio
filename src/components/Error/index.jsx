import Error404 from "../../assets/404.svg"
import { Link } from "react-router-dom"
import '../Error/Error.scss'

function Error() {

    return (
      <div className="error404">
        <img src={Error404} className="error__img" alt="Logo 404"></img>
        <h1 className="error__title">Oups! La page que vous avez demandé n'existe pas.</h1>
        <Link className="error__text" to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
  export default Error