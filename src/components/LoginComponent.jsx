// import React from "react";
// import { useState } from "react";

// import { GoogleLogin } from "@react-oauth/google";

// import { toast } from "react-toastify";

// import { useNavigate } from "react-router-dom";

// const LoginComponent = () => {
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // For now, we simulate a successful login

//     if (email && password) {
//       toast.success("Logged in successfully!");

//       navigate("/employees"); // Redirect to the list
//     } else {
//       toast.error("Please fill in all fields");
//     }
//   };

//   const responseGoogle = (response) => {
//     toast.success("Google Login Successful!");

//     navigate("/employees");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-8 bg-white shadow-lg rounded-xl w-96 text-center">
//         <h2 className="text-2xl font-bold mb-6">Login </h2>

//         <form className="space-y-4" onSubmit={handleLogin}>
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Email Address
//             </label>

//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Enter your email"
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
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//         <div className="relative flex items-center py-4">
//           <div className="flex-grow border-t border-gray-300"></div>

//           <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>

//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>
//         {/* GOOGLE BUTTON */}

//         <GoogleLogin
//           onSuccess={responseGoogle}
//           onError={() => toast.error("Google Login Failed")}
//         />

//         {/* <div className="my-4 text-gray-400">OR</div> */}
//       </div>
//       <div className="pt-4 border-t border-gray-100 text-center">
//         <p className="text-gray-600">
//           New to the system? *{" "}
//           <button
//             onClick={() => navigate("/signup")}
//             className="ml-2 text-blue-600 font-semibold hover:underline"
//           >
//             Create new account
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginComponent;
