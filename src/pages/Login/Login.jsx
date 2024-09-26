import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/Login/Login";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://gosafemvp-server.onrender.com/auth/login",
        {
          email,
          password,
        }
      );
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      // navigate to home page
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <LoginForm
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleLogin}
      loading={loading}
    />
  );
}

export default Login;
