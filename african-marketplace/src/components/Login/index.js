import React, { useState } from "react";
import axios from 'axios';

import {
  LoginWrapper,
  FormWrapper,
  Form,
  Input,
  Button,
} from "./LoginElements";

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formFields)

    // axios.post('https://african-marketplace-web-49-50.herokuapp.com/api/auth/login', formFields)
    //   .then(resp => {
    //     console.log(resp)
    //   })
    //   .catch(error => {
    //     console.log(error.response)
    //   })
  }

  return (
    <>
      <LoginWrapper>
        <h1> Login</h1>

        <Form>
          <Input
            value={formFields.username}
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <Input
            value={formFields.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="password"
          />
          <Button onClick={handleClick}>Submit</Button>
        </Form>
      </LoginWrapper>
    </>
  );
};

export default Login;
