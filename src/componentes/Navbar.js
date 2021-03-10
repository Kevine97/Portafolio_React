import React from 'react'

const Navbar = ({navbar, setNavbar}) => {
  
  const changeBackground = () => {
    if(window.scrollY >= 534){

        setNavbar(true);
    }else{
        setNavbar(false);
    }
  }

  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth'});
  };
  


  window.addEventListener('scroll', changeBackground);
 
  // fixed-top
  return (  
      <header className="header-wraper">
       
     <nav className={navbar ? 'navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target navbar-fixed-top fixed-top activate' : 'navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target navbar-fixed-top'}>
     <div className="container mt-2">
   <a className="navbar-brand" href="/"><span style={{marginLeft:'5px'}}>K</span> <span style={{marginLeft:'12px'}} className="mr-5">Esquivel</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="textoMenu"><i className="fas fa-hamburger mr-1"></i>MENU</span>
  </button>

  <div className="collapse navbar-collapse "  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/#">Inico</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Sobre mí</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Servicios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Habilidades</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Experiencia</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Portafolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Contactos</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
       <button className={navbar ? 'btn btn-primary scollButtons' : 'ocultar'} onClick={handleClick}>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </button>
</header>
);
}
 
export default Navbar;