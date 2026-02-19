// import axios from 'axios';

// // The base URL of your Spring Boot backend
// const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

// class UserService {

//     // Fetch all users
//     getAllUsers() {
//         return axios.get(USER_API_BASE_URL);
//     }

//     // Create a new user
//     createUser(user) {
//         return axios.post(USER_API_BASE_URL, user);
//     }

//     // Get user by ID
//     getUserById(userId) {
//         return axios.get(`${USER_API_BASE_URL}/${userId}`);
//     }

//     // Search user by email
//     getUserByEmail(email) {
//         return axios.get(`${USER_API_BASE_URL}/search?email=${email}`);
//     }

//     // Update user
//     updateUser(userId, user) {
//         return axios.put(`${USER_API_BASE_URL}/${userId}`, user);
//     }

//     // Delete user
//     deleteUser(userId) {
//         return axios.delete(`${USER_API_BASE_URL}/${userId}`);
//     }
// }

// // Export an instance of the class
// export default new UserService();