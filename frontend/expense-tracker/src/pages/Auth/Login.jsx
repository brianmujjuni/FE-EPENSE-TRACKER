import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";
import { validateEmail } from "../../utils/helpers";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Trim email to remove accidental whitespace
    const trimmedEmail = email.trim();
    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Fix password length validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    setError("");
    const data = { email: trimmedEmail, password };

    try {
      // Example API call (replace with actual implementation)
      // const response = await api.login(data);
      console.log("Login data:", data); // Placeholder
      setLoading(false);
      navigate("/dashboard"); // Example navigation
    } catch (err) {
      setError("Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Correct event handling
            placeholder="Enter your email"
            type="email" // Use type="email" for better UX
            label="Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Correct event handling
            type="password"
            label="Password"
            placeholder="Min 8 Characters"
          />
          <button type="submit" className="btn-primary mt-6" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          
          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}