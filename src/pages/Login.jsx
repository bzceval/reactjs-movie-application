import {useState} from 'react'

const Login = () => { 
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  //submit olduğunda login input değerlerini yakalamak için kullandığım function
  const handleLogin = (e) => {
    e.preventDefault() 
    console.log(email, password)
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image d-none d-md-block">
        <img src={'https://picsum.photos/800/800'} alt="sample-movie" />
      </div>
      <div className="register-form">
        
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleLogin}>

        <div className="mb-3"> 
          <label htmlFor="email" className='form-label'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id='email' placeholder='Enter Your Email' required/>
        </div>

        <div className="mb-3"> 
          <label htmlFor="password" className='form-label'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id='password' placeholder='Enter Your Password' required/>
        </div>

        <div className="link">Forgat Password</div>

        <div className="mb-3">
          <input type="submit" className='btn btn-primary form-control' value="Login" />
        </div>

        </form>

        <div className="btn btn-primary form-control"> Continue with Google </div>

      </div>
    </div>
  )
}

export default Login