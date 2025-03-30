import { Formik,Form,Field } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginTC } from '../../store/reducers/authreducer/authReducer'
import { NavLink } from 'react-router-dom'
const LoginPage = () => {
  const dispatch = useDispatch()
  const authHandler = ({email,password}) => {
    dispatch(loginTC(email,password))
  }
  return (
    <div>
      <Formik 
      initialValues={{
        email: '',
        password : ''
      }}
      onSubmit={(val) => {authHandler(val)
      }}>
        <Form>
          <Field name='email' placeholder = 'Email'/>
          <Field type='password' name='password' placeholder = 'Password'/>
        <NavLink >
          <button type='submit'>Log In</button>
        </NavLink>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage