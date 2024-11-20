import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Heroreg = () => {

    //const [Errormsg,setErrormsg]=useState[''];
    const handleclickhero=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        console.log(email);
        const password=e.target.password.value;
        console.log(password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(Result=>{
            console.log(Result.user);
        })
        .catch(error=>{
            console.log(error);
            setErrormsg(error.message);
        })

    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleclickhero}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password"className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary  w-full p-4" type="submit" value="Register" />
        </div>
      </form>
      {/* {
        Errormsg && <p className="text-red-500">{Errormsg}</p>
      } */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Heroreg;