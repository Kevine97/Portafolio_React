import React, {useState} from 'react'
const Navbar = () => {
  

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 534){

        setNavbar(true);
    }else{
        setNavbar(false);
    }
  }


  window.addEventListener('scroll', changeBackground);
 
  // fixed-top
  return (  
      <header className="header-wraper">
       
     <nav className={navbar ? 'navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target navbar-fixed-top fixed-top activate' : 'navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target navbar-fixed-top'}>
     <div className="container">
   <a className="navbar-brand" href="/index.html"><span style={{marginLeft:'5px'}}>K</span> <span style={{marginLeft:'12px'}} className="mr-5">Esquivel</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className=""> <i className="fas fa-hamburger"></i></span>
  </button>

  <div className="collapse navbar-collapse "  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">How work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Portafolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Contacts</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</header>
);
}
 
export default Navbar;