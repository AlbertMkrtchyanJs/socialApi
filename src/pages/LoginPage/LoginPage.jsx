import { Formik,Form,Field } from 'formik'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <Formik 
      initialValues={{
        email: '',
        password : ''
      }}
      onSubmit={(values) => {console.log(values)
      }}>
        <Form>
          <Field name='email'/>
          <Field name='password'/>
          <button type='submit'>Log In</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage