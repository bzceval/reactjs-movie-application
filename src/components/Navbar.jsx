import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    //başlangıçta sahte kullanıcı yaptık çünkü firebase hala bağlı değil gerçek kullanıcım yok
    const currentUser = false
    // const currentUser = {displayName: "Mark Madison"}
    const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h4>React Movie App</h4>
          </Link>
          <div className="d-flex align-items-center">
            {/* eğer userım varsa bu şekilde görünecek yoksa diğer şekilde, ayarladıktan sonra routerlarını çizeceğim */}
            {/* rotalarını çizmem için navigate hookuna ihtiyacım olcek çünkü onClick yaptığımda başka sayfaya gidecek*/}
          {currentUser ? (
            <>
            <h5 className="mb-0"> {currentUser.displayName}</h5>
            <button className="ms-4 btn btn-outline-dark">Logout</button>
            </>
          ) : (
            <>
            <button className="ms-4 btn btn-dark" onClick={()=> navigate("/login")} >Login</button>
            <button className="ms-4 btn btn-outline-dark" onClick={()=> navigate("/register")}>Register</button>
            </>
          ) }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
