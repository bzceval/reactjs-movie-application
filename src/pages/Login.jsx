import {useState} from 'react'

const Login = () => { 
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  //submit olduğunda input değerlerini yakalamak için kullandığım function
  const handleSubmit = (e) => {
    e.preventDefault()
    // formumuzdan değerleri yakalayabildiğimizi kontrol ediyoruz, consoleye basıyoruz
    // sonrasında bu backende yani firebaseye göndereceğiz.
    // console.log(firstName, lastName)
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image d-none d-md-block">
        <img src={'https://picsum.photos/800/800'} alt="sample-movie" />
      </div>
      <div className="register-form">
        
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>

        <div className="mb-3"> 
          <label htmlFor="email" className='form-label'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id='email' placeholder='Enter Your Email' required/>
        </div>

        <div className="mb-3"> 
          <label htmlFor="password" className='form-label'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id='password' placeholder='Enter Your Password' required/>
        </div>

        <div className="mb-3">
          <input type="submit" className='btn btn-primary form-control' value="Register" />
        </div>

        </form>

      </div>
    </div>
  )
}

export default Login