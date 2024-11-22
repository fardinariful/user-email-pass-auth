import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Login = () => {
  const login = (e) => {
    e.preventDefault();

    // Get email and password from form inputs
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Log email for debugging (avoid logging sensitive data like passwords)
    console.log("Email:", email);

    // Firebase sign-in
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signed in:", res.user);
        // Handle successful login (e.g., redirect to dashboard)
      })
      .catch((error) => {
        console.error("Login error:", error.code, error.message);
        // Optionally, display error message to the user
        alert("Login failed. Please check your credentials and try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={login}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
