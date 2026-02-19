// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";

// import { GoogleLogin } from "@react-oauth/google";

// import { toast } from "react-toastify";

// const SignupComponent = () => {
//   const [name, setName] = useState("");

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (name && email && password) {
//       // Logic to call your backend /auth/signup goes here

//       toast.success("Account created successfully! Please login.");

//       navigate("/login");
//     } else {
//       toast.error("Please fill in all fields");
//     }
//   };

//   const handleGoogleSuccess = (response) => {
//     // Google handles the "Signup" and "Login" in one step

//     toast.success("Account created via Google!");

//     navigate("/employees");
//   };
//   return (
//     <div className="flex items-center justify-center mt-12">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl border border-gray-200">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Create Account
//         </h2>


//         {/* Manual Signup Form */}

//         <form className="space-y-4" onSubmit={handleSignup}>
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Full Name
//             </label>

//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//               placeholder="John Doe"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Email Address
//             </label>

//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//               placeholder="name@company.com"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Password
//             </label>

//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
//           >
//             Register
//           </button>
//         {/* Google Signup Option */}

//         <div className="flex justify-center">
//           <GoogleLogin onSuccess={handleGoogleSuccess} text="signup_with" />
//         </div>

//         <div className="relative flex items-center py-2">
//           <div className="flex-grow border-t border-gray-300"></div>

//           <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>

//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>
//         </form>

//         <p className="text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             className="ml-2 text-blue-600 font-semibold hover:underline"
//           >
//             Login here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupComponent;
