import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthPoviders';

const Register = () => {
  const {user, createUser} = useContext(AuthContext)
  console.log(createUser)
   
        const handleRegister = (event) => {
            event.preventDefault()
            const form = event.target
            const name = form.name.value
            const email = form.email.value
            const password = form.password.value
          console.log(name, email, password)
          createUser(email, password)
            .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser)
            })
            .catch(error => {
            console.log(error)
            })
          event.target.reset()
        }
        return (
            <div className="hero h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' required placeholder="name" className="input input-bordered" />
            </div>
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
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
                        </form>
            <p className='px-4 pb-3'>Already Have an account? <Link to='/login' className="label-text-alt link link-hover text-blue-700 text-sm"> Login Here</Link></p>
             
        </div>
      </div>
    </div>
    );
};

export default Register;