import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const Register = () => {
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      });
    
      return (
<div className='max-w-[500px] w-full m-auto h-screen mt-4'>
<Formik
      
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission (e.g., send data to your authentication backend)
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Regiter</h2>

          <Field type="text" name="username" placeholder="Username" className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-2" />

          <Field type="email" name="email" placeholder="Email" className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-2" />

          <Field type="password" name="password" placeholder="Password" className="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-2" />

          <button type="submit" disabled={isSubmitting} className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md mt-6">
            Regiter
          </button>
        </Form>
      )}
    </Formik>
</div>
       
  )
}

export default Register
