import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginTC } from "../../store/reducers/authreducer/authReducer";
import { useNavigate } from "react-router-dom";
import validation from "../../schema/schema";

const LoginPage = () => {
  const dispatch = useDispatch();
 
  const authHandler = ({ email, password }) => {
    dispatch(loginTC(email, password));
   
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validation}
        onSubmit={(val) => {
          authHandler(val);
        }}
      >
        <Form>
          <Field name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
