import React from 'react'
const Navbar = () => {
    return (  
 <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
   <a className="navbar-brand" href="#"><span>K</span>  Esquivel</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className=""> <i className="fas fa-hamburger"></i></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sobre mi</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Servicios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">How work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portafolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
    </ul>
  </div>
  </div>
</nav>);
}
 
export default Navbar;