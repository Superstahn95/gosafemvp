import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../Components/Signup/Signup";
function Signup({ user, setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://gosafemvp-server.onrender.com/auth/register",
        {
          name,
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
    <SignupForm
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleRegistration}
      loading={loading}
    />
  );
}

export default Signup;
