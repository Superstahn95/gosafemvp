import "./Login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>If you don&apos;t have an account ? </p>
        <Link to="/signup" type="submit" className="btn btn-success">
          Sign Up
        </Link>
      </div>
      <div>
        <Link to="/">Go to home</Link>
      </div>
    </div>
  );
};

export default LoginForm;
