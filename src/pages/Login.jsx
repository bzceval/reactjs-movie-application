import { useState } from "react";
import { forgotPassword, signIn, signUpProvider } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //submit olduğunda login input değerlerini yakalamak için kullandığım function
  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className="auth-container d-flex justify-content-center">
      <div className="form-image col d-none d-lg-block">
        <img
          src={
            "https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80"
          }
          alt="sample-movie"
        />
      </div>
      <div className="register-form col">
        <h1 className="form-title display-3" data-test="login-header">
          Login
        </h1>
        <form id="register" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control p-2 ps-3"
              id="email"
              placeholder="Enter Your Email"
              required
              data-test="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control p-2 ps-3"
              id="password"
              placeholder="Enter Your Password"
              required
              data-test="password"
            />
          </div>

          <div className="link mt-4 mb-2" onClick={() => forgotPassword(email)}>
            Forgat Password
          </div>

          <div className="mb-2">
            <input
              type="submit"
              className="btn btn-dark form-control"
              value="Login"
              data-test="loginSbmtBtn"
            />
          </div>
        </form>

        <div
          className="btn btn-dark form-control"
          onClick={handleProviderLogin}
        >
          {" "}
          Continue with Google{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
