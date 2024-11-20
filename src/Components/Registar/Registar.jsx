import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Registar = () => {
    const [Errormsg,setErrormsg]=useState('');
    const [success,setsuccess]=useState('');
    const handleclickreg=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        console.log(email);
        const password=e.target.password.value;
        console.log(password);
        setErrormsg('');
        setsuccess('');
        //create new user
        createUserWithEmailAndPassword(auth,email,password)
        .then(Result=>{
            console.log(Result.user);
            setsuccess('User register done');
            
        })
        .catch(error=>{
            console.log(error);
            setErrormsg(error.message);
        })
    }
    return (
        <div className="container mx-auto text-center">
            <div className="w-1/2 space-y-3">
            <h2>Please Register</h2>
            </div>
         <form className="w-1/2 space-y-3" onSubmit={handleclickreg}>
            <input className="text-black border border-red-600 w-full p-4" type="email" name="email" id="" placeholder="Email Address" />
            <br />
            <input className="text-black border border-red-600 w-full p-4" type="password" name="password" id="" placeholder="password"/>
            <br />
            <input className="btn btn-primary  w-full p-4" type="submit" value="Register" />
         </form>
         {
        Errormsg && <p className="text-red-500">{Errormsg}</p>
      }
       {
        success && <p className="text-green-500">{success}</p>
      }
        </div>
    );
};

export default Registar;