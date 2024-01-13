'use client'
import React from 'react';
import Image from 'next/image'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/login.module.css'

const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
password: Yup.string().required("Please provide a valid password").oneOf([Yup.ref('password'), null]).min(5, 'Error'),
});

const Login = () =>{
    return(
                      
  <div className={styles.container}>
  
  <div className={styles.bimage}>
   <img src="/output.jpg"  alt="chatImage"/>
       </div>
         <h1 className={styles.h1}>Login</h1>
       <div className={styles.form}>

    <Formik
      initialValues={{
        phoneNumber:'',
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
           <label className={styles.label}>Phone number</label>
           <Field className={styles.input} name="phoneNumber" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
         
          <label className={styles.label}>Password</label>
          <Field className={styles.input} name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
          <button className={styles.btn} type="submit">LOGIN</button>
        </Form>
      )}
    </Formik>
  </div>
  </div>
);
          }
export default Login