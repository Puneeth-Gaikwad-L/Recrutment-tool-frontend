import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState(['Admin', 'User']); // Example roles
  
    const initialValues = {
      username: '',
      organization: '',
      registrationNumber: '',
      email: '',
      password: '',
      selectedRoles: [],
    };
  
    const validationSchema = Yup.object({
      username: Yup.string().required('Username is required'),
      organization: Yup.string().required('Organization is required'),
      registrationNumber: Yup.string().required('Registration Number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });
  
    const onSubmit = (values, { resetForm }) => {
      // Add user creation logic here
      setUsers([...users, values]);
      resetForm();
    };
  
    return (
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>
  
            {/* Organization */}
            <div className="mb-4">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-600">
                Organization
              </label>
              <Field
                type="text"
                id="organization"
                name="organization"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage name="organization" component="div" className="text-red-500 text-sm" />
            </div>
  
            {/* Registration Number */}
            <div className="mb-4">
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-600">
                Registration Number
              </label>
              <Field
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage name="registrationNumber" component="div" className="text-red-500 text-sm" />
            </div>
  
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
  
            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
  
            {/* Role Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Select Roles:</label>
              {roles.map((role) => (
                <label key={role} className="inline-flex items-center mt-2">
                  <Field
                    type="checkbox"
                    name="selectedRoles"
                    value={role}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{role}</span>
                </label>
              ))}
            </div>
  
            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Create User
              </button>
            </div>
          </Form>
        </Formik>
  
        {/* Display Users (for demonstration) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Users:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.username}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
export default UserManagement