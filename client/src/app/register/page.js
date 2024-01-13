'use client'
import React from 'react';
import Image from 'next/image'
import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import styles from '../../styles/register.module.css'

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
confirmpassword: Yup.string()
  .oneOf([Yup.ref('password')], 'Passwords must match')
  .required('Please confirm your password'),
email: Yup.string()
.email('Invalid email address')
.test('valid-email', 'Invalid email address', function (value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value || '');
})
.required('Required')
});

const Register = () =>{
    return(
                      
  <div className={styles.container}>
  
  <div className={styles.bimage}>
   <img src="/output.jpg"  alt="chatImage"/>
       </div>
         <h1 className={styles.h1}>Signup</h1>
       <div className={styles.form}>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber:'',
        email: '',
        password:'',
        confirmpassword:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label className={styles.label}>First name</label>
          <Field  className={styles.input} name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
      <br/>

           <label className={styles.label}>Last name</label>
            <Field className={styles.input} name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
        <br/>

           <label className={styles.label}>Phone number</label>
           <Field className={styles.input} name="phoneNumber" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
         <br/>
           <label className={styles.label}>Email</label>
          <Field className={styles.input} name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/>

          <label className={styles.label}>Password</label>
          <Field className={styles.input} name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
          <label className={styles.label}>Confirm password</label>
          <Field className={styles.input} name="confirmpassword" />
          {errors.confirmpassword && touched.confirmpassword ? (
            <div>{errors.confirmpassword}</div>
          ) : null}
          <button className={styles.btn} type="submit">SIGNUP</button>
          <br/>
          <span className={styles.span2}>Already have an account?<Link  className={styles.link} href="/login">Login</Link></span>
        </Form>
      )}
    </Formik>
  </div>
  </div>
);
          }
export default Register