import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const AdminLogin = () => {
  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string().required("Username or email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <div className="max-w-[500px] w-full m-auto h-screen mt-4">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // Handle form submission (e.g., send data to your authentication backend)
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

            <Field
              type="text"
              name="usernameOrEmail"
              placeholder="Username or Email"
              className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <ErrorMessage
              name="usernameOrEmail"
              component="div"
              className="text-red-500 text-sm mt-2"
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-2"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md mt-6"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminLogin;
