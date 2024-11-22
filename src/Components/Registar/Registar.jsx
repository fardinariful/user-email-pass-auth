import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
const Registar = () => {
    const [Errormsg,setErrormsg]=useState('');
    const [success,setsuccess]=useState('');
    const [showpass,setshowpass]=useState(false);
    const handleclickreg=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        console.log(email);
        const password=e.target.password.value;
        console.log(password);
        const accepted=e.target.terms.checked;
        if(password.length<6){
            setErrormsg('Password should be 6 cha');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setErrormsg('Password should be atleast one uppercase character');
            return;
        }
        else if(!accepted){
            setErrormsg("Please accept our terms and condition");
            return;
        }
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
            <div className="relative">
            <input className="text-black border border-red-600 w-full p-4" 
            type={showpass?"text":"password"} 
            name="password" id="" placeholder="password"/>
            <span className="absolute top-5 right-3" onClick={()=>setshowpass(!showpass)}>
                {showpass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
            </div>
            <br />
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="">Accept Terms and Condition</label>
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