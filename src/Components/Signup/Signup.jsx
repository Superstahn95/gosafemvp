import "./Signup.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="signup">
      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm">
          <div className="inputGroup">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                placeholder="Enter your name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                autoComplete="off"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an account ? </p>
          <Link to="/login" type="submit" class="btn btn-primary">
            Login
          </Link>
        </div>
        <div>
          <Link to="/">Go to home</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
