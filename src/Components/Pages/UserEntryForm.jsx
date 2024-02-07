import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobile: Yup.string().required('Mobile is required'),
  experienceInYears: Yup.number()
    .typeError('Experience must be a number')
    .required('Experience is required'),
  relevantExperience: Yup.string().required('Relevant Experience is required'),
  highestQualificationHeld: Yup.string().required('Highest Qualification is required'),
  skillSet: Yup.string().required('Skill Set is required'),
  currentJobTitle: Yup.string().required('Current Job Title is required'),
  currentWorkLocation: Yup.string().required('Current Work Location is required'),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string().required('Zip Code is required'),
  resume: Yup.mixed().required('Resume is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  mobile: '',
  experienceInYears: '',
  relevantExperience: '',
  highestQualificationHeld: '',
  skillSet: '',
  currentJobTitle: '',
  currentWorkLocation: '',
  city: '',
  zipCode: '',
  resume: null,
};

const onSubmit = (values) => {
  console.log(values);
  // Here you can handle form submission, e.g., send data to server
};

const UserEntryForm = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Job Application Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block">First Name</label>
              <Field type="text" name="firstName" id="firstName" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="firstName" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="lastName" className="block">Last Name</label>
              <Field type="text" name="lastName" id="lastName" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="lastName" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="phone" className="block">Phone</label>
              <Field type="text" name="phone" id="phone" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="phone" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <Field type="email" name="email" id="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="email" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="mobile" className="block">Mobile</label>
              <Field type="text" name="mobile" id="mobile" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="mobile" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="experienceInYears" className="block">Experience in Years</label>
              <Field type="text" name="experienceInYears" id="experienceInYears" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="experienceInYears" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="relevantExperience" className="block">Relevant Experience</label>
              <Field type="text" name="relevantExperience" id="relevantExperience" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="relevantExperience" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="highestQualificationHeld" className="block">Highest Qualification Held</label>
              <Field type="text" name="highestQualificationHeld" id="highestQualificationHeld" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="highestQualificationHeld" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="skillSet" className="block">Skill Set</label>
              <Field type="text" name="skillSet" id="skillSet" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="skillSet" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="currentJobTitle" className="block">Current Job Title</label>
              <Field type="text" name="currentJobTitle" id="currentJobTitle" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="currentJobTitle" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="currentWorkLocation" className="block">Current Work Location</label>
              <Field type="text" name="currentWorkLocation" id="currentWorkLocation" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="currentWorkLocation" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="city" className="block">City</label>
              <Field type="text" name="city" id="city" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="city" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="zipCode" className="block">Zip Code</label>
              <Field type="text" name="zipCode" id="zipCode" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="zipCode" component="div" className="text-red-600" />
            </div>
            <div>
              <label htmlFor="resume" className="block">Resume Upload</label>
              <Field type="file" name="resume" id="resume" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              <ErrorMessage name="resume" component="div" className="text-red-600" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserEntryForm;
