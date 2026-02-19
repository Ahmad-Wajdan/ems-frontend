import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
    {/* <GoogleOAuthProvider clientId="196567797532-22tr9t5lbovkbu1gr7ct8kiu680jdjbf.apps.googleusercontent.com"> */}
    <BrowserRouter>
    <div className="flex flex-col min-h-screen bg-gray-50">
    <HeaderComponent/>
    <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    <main className="flex-grow">
    <Routes>

      {/* <Route path='/' element={ <LoginComponent /> } /> */}
      {/* <Route path='/login' element={ <LoginComponent /> } /> */}

      {/* <Route path='/signup' element={ <SignupComponent /> } /> */}
      {/* // http://localhost:5173 */}
      <Route path='/' element={ <ListEmployeeComponent />}></Route>

      {/* // http://localhost:5173/employees */}
      <Route path='/employees' element = {<ListEmployeeComponent />}> </Route>

      {/* // http://localhost:5173/add-emplyees */}
      <Route path='/add-employee' element = {<EmployeeComponent />}> </Route>

      {/* // http://localhost:5173/edit-emplyees */}
      <Route path='/edit-employee/:id' element = {<EmployeeComponent />}> </Route>
    </Routes>
    </main>
    <FooterComponent/>
    </div>
    </BrowserRouter>
    {/* </GoogleOAuthProvider> */}
    </>
  )
}

export default App
