import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContextProvider";
import { logOut } from "../auth/firebase";

const Navbar = () => {
    //başlangıçta sahte kullanıcı yaptık çünkü firebase hala bağlı değil gerçek kullanıcım yok
    // const currentUser = false
    // const currentUser = {displayName: "Mark Madison"}
    const navigate = useNavigate()
    //context yapısını kurma
    const {currentUser} = useContext(AuthContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container pt-2 pb-2">
          <Link to="/" className="navbar-brand">
            <h3>Ninjas Movie App</h3>
          </Link>
          <div className="d-flex align-items-center">
            {/* eğer userım varsa bu şekilde görünecek yoksa diğer şekilde, ayarladıktan sonra routerlarını çizeceğim */}
            {/* rotalarını çizmem için navigate hookuna ihtiyacım olcek çünkü onClick yaptığımda başka sayfaya gidecek*/}
          {currentUser ? (
            <>
            <h5 className="mb-0 text-light"> {currentUser.displayName}</h5>
            <button className="ms-4 btn btn-outline-light" onClick={() => logOut()}>Logout</button>
            </>
          ) : (
            <>
            <button className="ms-4 btn btn-outline-light" onClick={()=> navigate("/login")} >Login</button>
            <button className="ms-4 btn btn-outline-light" onClick={()=> navigate("/register")}>Register</button>
            </>
          ) }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
