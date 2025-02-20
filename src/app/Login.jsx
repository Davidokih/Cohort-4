import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://auth-user-yvxy.onrender.com/api/user/signin",
        values
      );
      console.log(response);
      setIsLoading(false);
      localStorage.setItem("currentUser", response.data.data);
      navigate("/");
    } catch (error) {
      console.log(error.response.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <form
        onSubmit={handleSubmit}
        className="min-w-[400px] shadow-sm bg-gray-100 flex items-center justify-center flex-col p-4"
      >
        <h1 className="font-bold text-xl mb-4">Login</h1>
        <div className="flex flex-col w-full mb-2">
          <label className="font-medium mb-1 text-base">Email</label>
          <input
            placeholder="Enter email address"
            onChange={handleChange}
            name="email"
            className="w-full border border-gray-300 focus:outline-0 rounded py-2 px-2"
          />
        </div>
        <div className="flex flex-col w-full mb-2">
          <label className="font-medium mb-1 text-base">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full border border-gray-300 focus:outline-0 rounded py-2 px-2"
          />
        </div>

        <button
          disabled={isLoading}
          className="bg-green-400 cursor-pointer w-full py-2 rounded-md mt-4 mb-1"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          Already have an account?
          <Link to="/login">
            {" "}
            <strong>Login</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
