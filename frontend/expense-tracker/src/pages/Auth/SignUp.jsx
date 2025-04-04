import React, { useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";
import { validateEmail } from "../../utils/helpers";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import uploadImage from "../../utils/uploadImage";

export default function SignUp() {
  const [profilePic, setProfilePic] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    let profilePicUrl = "";
    setLoading(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }
    if (!password) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }
    if (!fullName) {
      setError("Please enter your full name");
      setLoading(false);
      return;
    }
    setError("");
   
    try {
      if(profilePic){
        const imgUploadRes = await uploadImage(profilePic)
        profilePicUrl = imgUploadRes.imageUrl || " "
        
      }
      const data = { email, password, fullName , profilePicUrl};
    
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, data);
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
        setLoading(false);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
        setLoading(false);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full md:mt-0 flex flex-col justify-center ">
        <h3 className="text-xl font-semibold text-black">Creae an Account</h3>
        <p className="text-sx test-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below
        </p>
        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              type="text"
              label="Full Name"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Correct event handling
              placeholder="Enter your email"
              type="email" // Use type="email" for better UX
              label="Email"
            />
            <div className="col-span-2">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
                placeholder="Min 8 Characters"
              />
            </div>
          </div>
          <button type="submit" className="btn-primary mt-6" disabled={loading}>
            {loading ? "Loading..." : "Signup"}
          </button>
          {error && <p className="text-red-500 text-xs pb-2.5 ">{error}</p>}

          <p className="text-[13px] text-slate-800 mt-3">
            Have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
