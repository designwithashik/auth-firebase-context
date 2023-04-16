import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthPoviders';

const Login = () => {

  const {signIn} = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
      const password = form.password.value
      signIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .then(error => {
        console.log(error)
      })
      
  }
  
    return (
        <div className="hero h-[calc(100vh-64px)] bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' required type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary">Login</button>
        </div>
                    </form>
        <p className='px-3 pb-3'>New to <Link to='/register' className="label-text-alt link link-hover text-blue-700 text-sm"> Context Master?</Link></p>
         
    </div>
  </div>
</div>
    );
};

export default Login;