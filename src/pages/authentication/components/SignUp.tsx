import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';

const SignUp = () => {
  
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
     password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
   confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match') 
    .required('Confirm password is required'),
    industry: Yup.string().required('Industry is required'),
  });

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        industry: '',
      }}
      validationSchema={validationSchema} 
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="firstname">First Name:</label>
            <Field type="text" id="firstname" name="firstname" />
            <ErrorMessage name="firstname" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <div>
            <label htmlFor="industry">Industry:</label>
            <Field as="select" id="industry" name="industry">
              <option value="">Select an industry</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </Field>
            <ErrorMessage name="industry" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
