import "bulma/css/bulma.css";
import CardWidget from "./CardWidget"
import logoImg from "../img/logo-react.png";



function Navbar (){
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation" class="navbar is-dark">
  <div className="navbar-brand">
    <a className="navbar-item" href="">
      <img src={logoImg} width="112" height="28" alt="logo"/>
    </a>

    <a href="" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="" className="navbar-item">
        Samsung 
      </a>

      <a href="" className="navbar-item">
        Productos
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a href="" className="navbar-link">
          Contacto
        </a>

        <div className="navbar-dropdown">
          <a href=""className="navbar-item">
           Whatsapp
          </a>

        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href=""className="button is-primary">
            <strong>Quiero uno</strong>
          </a>
          <CardWidget/>
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
    
}


const msj = "Exportando una variable";
export {msj};

export default Navbar;
