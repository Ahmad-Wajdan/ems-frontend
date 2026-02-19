import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import { useNavigate,useParams } from "react-router-dom";
import { toast } from 'react-toastify'

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
      if(id){
        getEmployee(id).then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        }).catch(error => {
          console.error(error);
        })
      }
  }, [id])

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      if(id){
        updateEmployee(id, employee).then((response) => {
          toast.info("Employee updated successfully!");
          navigator('/employees'); 
        }).catch(error => {
          toast.error(error.response.data.message);
        })
      }else{
        createEmployee(employee).then((response) => {
          toast.success("Employee added successfully!");
          navigator("/employees");
        }).catch(error => {
          toast.error(error.response.data.message)
        })
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    errorsCopy.email = '';
  } else {
    errorsCopy.email = 'Please enter a valid email address';
    valid = false;
  }
    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
      if(id){
        return <h2 className="text-center text-2xl font-bold">Update Employee</h2>
      }else{
        return <h2 className="text-center text-2xl font-bold">Add Employee</h2>
      }
  }
  return (
    <div>
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white shadow-xl border border-slate-200 w-full max-w-md rounded-lg overflow-hidden">
          <div className="p-8">
            {
              pageTitle()
            }

            <form onSubmit={saveOrUpdateEmployee} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className={`w-full border border-slate-200 rounded-md px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-slate-400
                  ${errors.firstName ? 'invalid:border-red-500': ''} `}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                required/>
                {errors.firstName && <div className="invalid:border-red-500 ">{errors.firstName}</div>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className={`w-full border border-slate-200 rounded-md px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-slate-400
                  ${errors.lastName ? 'invalid:border-red-500': ''} `}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                required/>
                {errors.lastName && <div className="invalid:border-red-500  ">{errors.lastName}</div>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className={`w-full border border-slate-200 rounded-md px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-slate-400
                  ${errors.lastName ? 'invalid:border-red-500': ''} `}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                required/>
                {errors.email && <div className="invalid:border-red-500 ">{errors.email}</div>}
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-slate-900 text-white py-2 rounded-md font-medium hover:bg-slate-800 transition-colors"
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeComponent;
