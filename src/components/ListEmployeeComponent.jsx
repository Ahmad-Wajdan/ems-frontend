import { tr } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);
  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      console.log(id);

      deleteEmployee(id)
        .then((response) => {
          toast.success("Employee deleted successfully!");
          getAllEmployees();
        })
        .catch((error) => {
          console.error(error);
          const errorMsg =
            error.response?.data?.message || "Failed to delete employee";
          toast.error(errorMsg);
        });
    }
  }
  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-black underline">
        List of Employees
      </h2>
      <div className="flex flex-1 md:flex-none items-center gap-285">
        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700-strong
       focus:ring-4 focus:ring-blue-medium shadow-sm font-medium leading-5
       rounded-md text-sm px-4 py-2.5 focus:outline-none mb-2"
          onClick={addNewEmployee}
        >
          Add Employee
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 ">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-left font-bold text-black text-lg">
                Employee Id
              </th>
              <th className="px-4 py-3 border border-gray-300 text-left font-bold text-black text-lg">
                Employee First Name
              </th>
              <th className="px-4 py-3 border border-gray-300 text-left font-bold text-black text-lg">
                Employee Last Name
              </th>
              <th className="px-4 py-3 border border-gray-300 text-left font-bold text-black text-lg">
                Employee Email Id
              </th>
              <th className="px-2 py-1 border border-gray-300 text-left font-bold text-black text-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 border border-gray-300 text-gray-700">
                  {employee.id}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-gray-700">
                  {employee.firstName}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-gray-700">
                  {employee.lastName}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-gray-700">
                  {employee.email}
                </td>
                <td className="space-x-3 px-3 py-2 border border-gray-300">
                  <div className="flex items-center gap-3">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      Update{" "}
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      Delete{" "}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
