import React, { useState } from "react";
import {
  SignupWrapper,
  Form,
  Input,
  Button,
} from "./SignupElements";

const Signup = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    firstName:"",
    lastName:"",
  });

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formFields);
  }
  return (
    <>
      <SignupWrapper>
        <h1> Sign Up</h1>

        <Form>
        <Input
            value={formFields.firstName}
            onChange={handleInputChange}
            type="text"
            name="firstName"
            placeholder="Enter First Name"
          />
          <Input
            value={formFields.lastName}
            onChange={handleInputChange}
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
          />
          <Input
            value={formFields.username}
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="Create username"
          />
          <Input
            value={formFields.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="Create password"
          />
          <Button onClick={handleClick}>Create Account</Button>
        </Form>
      </SignupWrapper>
    </>
  );
};

export default Signup;
