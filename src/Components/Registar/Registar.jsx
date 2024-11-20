const Registar = () => {

    const handleclickreg=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        console.log(email);
        const password=e.target.password.value;
        console.log(password);
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
        </div>
    );
};

export default Registar;