'use client'
import React from 'react';
import Image from 'next/image'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phoneNumber: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
password: Yup.string().required("Please provide a valid password").oneOf([Yup.ref('password'), null]).min(5, 'Error'),
email: Yup.string()
.email('Invalid email address')
.test('valid-email', 'Invalid email address', function (value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value || '');
})
.required('Required')
});

const Register = () =>{
    return(
  <div>
   <img
  src="output.jpg"
  alt="chatImage"
  style={{
    width: '30%',   // Adjust the width as needed
    height: '30%',  // Maintain aspect ratio
    borderRadius: '8px',  // Add rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Add a subtle box shadow
  }}
/>

    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber:'',
        email: '',
        password:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <img/>
            <label>First name</label>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <br/>
           <label>Last name</label>
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <br/>
           <label>Phone number</label>
           <Field name="phoneNumber" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <br/>
           <label>Email</label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/>
          <label>Password</label>
          <Field name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
          <button type="submit">SIGNUP</button>
        </Form>
      )}
    </Formik>
  </div>
);
          }
export default Register