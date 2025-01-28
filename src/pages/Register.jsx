import {useState} from 'react'
import { createUser } from '../auth/firebase'
import { useNavigate} from "react-router-dom"
import {signUpProvider} from '../auth/firebase'

const Register = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  //submit olduğunda input değerlerini yakalamak için kullandığım function
  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = `${firstName} ${lastName}`;
    // formumuzdan değerleri yakalayabildiğimizi kontrol ediyoruz, consoleye basıyoruz
    // sonrasında bu backende yani firebaseye göndereceğiz.
    // console.log(firstName, lastName)
    // firebase signin new users method import
    createUser(email, password, displayName, navigate)
    // navigate("/")
  }
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image col d-none d-lg-block">
        <img src={'https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80'} alt="sample-movie" />
      </div>
      <div className="register-form">
        
        <h3 className="form-title display-3">Register</h3>
        <form id="register" onSubmit={handleSubmit}>

        <div className="mb-3">          
          <label htmlFor="firstName" className='form-label'>First Name</label>
          <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control p-2 ps-3" id='firstName' placeholder='Enter Your First Name' required/>
        </div>

        <div className="mb-3"> 
          <label htmlFor="lastName" className='form-label'>Last Name</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control p-2 ps-3" id='lastName' placeholder='Enter Your Last Name' required/>
        </div>

        <div className="mb-3"> 
          <label htmlFor="email" className='form-label'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control p-2 ps-3" id='email' placeholder='Enter Your Email' required/>
        </div>

        <div className="mb-3"> 
          <label htmlFor="password" className='form-label'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control p-2 ps-3" id='password' placeholder='Enter Your Password' required/>
        </div>

        <div className="mb-3">
          <input type="submit" className='btn btn-dark form-control' value="Register" />
        </div>

        </form>
        <div className="btn btn-dark form-control" onClick={handleProviderLogin} > Continue with Google </div>
      </div>
    </div>
  )
}

export default Register