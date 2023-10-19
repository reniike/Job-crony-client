import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";

const PreRegistration = () => {
    const PreRegistrationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email, please enter a valid email').required('Required')
    })

    const formik = useFormik({
      initialValues : {
        email: ''
      },
      validationSchema: PreRegistrationSchema,
      onSubmit: (values) => {
        console.log(values)
      }
    })

  return (
    <div>
      <h1>
        Enter your email to begin the process. We'll send you a magic link for a
        hassle-free registration.
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PreRegistration



