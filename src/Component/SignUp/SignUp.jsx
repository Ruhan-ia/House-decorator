import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import Lottie from 'react-lottie-player';
import animationData from '../../assets/Animation - 2.json'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {createUser, google} = useContext(AuthContext)
    const handleGoogle = () =>{
      google()
      .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
        const user ={
          name:loggedUser.displayName,
          photo:loggedUser.photoURL,
          email:loggedUser.email
          ,
        }
         fetch('https://home-decoration-tool-server.vercel.app/dashBoard/user', {
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(user)
      
        } )
        .then(res => res.json())
        .then(data =>{
          console.log(data)
        })
        navigation(from, {replace:true})
      })
    }
    const {
      register,
      handleSubmit,
     
      formState: { errors },
    } = useForm();
    const onSubmit= (data) => {
      console.log(data)
      createUser(data.email, data.password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
        profileUpdate(loggedUser, data.name , data.photo)
  
      })
      const profileUpdate = (user, name, photo ) =>{
        updateProfile(user, {
          displayName:name, photoURL:photo
        })
        .then(() =>{
          const user ={
            name:data.name,
            photo:data.photo,
            email: data.email,
          }
           fetch('https://home-decoration-tool-server.vercel.app/dashBoard/user', {
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
        
          } )
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.insertedId){
                 
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })}
          })
           navigation(from, {replace:true})
          })
          .catch(error =>{
            console.log(error.message)
          })
      }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <div>
              <Lottie 
              animationData={animationData}
              play
              loop
              style={{ width: 500, height: 500 }}></Lottie>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input  {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered" required />

              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input  {...register("photo", { required: true })} type="url" placeholder="Your Photo URL" className="input input-bordered" required />
                  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                {errors.email && <span className='text-red-500 font-semibold '>Email is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true, maxLength: 20, minLength: 6 })} type="password" placeholder="password" className="input input-bordered" required />
                {errors.password && <span className='text-red-500 font-semibold '>Password is required</span>}

              </div>
              <div className="form-control mt-6">
                <p>Already have an account? please<Link to='/login'> <span className='text-red-400 font-semibold '>Login</span></Link></p>
                <input type="submit" value="Sign Up"  className="btn btn-primary" />
              </div>
              <div className='text-center'>
              <button onClick={handleGoogle} className="btn btn-circle btn-outline ">
              <FcGoogle className='text-xl font-bold' />
                  
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;