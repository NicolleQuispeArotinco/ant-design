import React, { useState } from "react";
import { MainContainer, Main, Header, FieldContainer , FormTitle, FormField, Label, Button, ButtonContainer, BContainer, FormFieldContainer, ErrorMessageText, FormContainer, Footer, Image, TextErrorMessage } from "../StyledComponents";
import logo from "../images/logo.svg";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { loadingStarted, loadingStopped } from "../app/statusSlice";

const validations = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(3, "Password must have more than 2 characters").required("Password is required"),
});

function FullField(props) {
  return(
    <FieldContainer>
      <Label>{props.label}:</Label>
      <FormFieldContainer>
        <FormField type={props.type} name={props.name} />
        <ErrorMessage name={props.name}>
          {(msg) => (
            <div>
              <ErrorMessageText>* {msg}</ErrorMessageText>
            </div>
          )}
        </ErrorMessage>
      </FormFieldContainer>
    </FieldContainer>
  )
}
function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const loading = useSelector((state) => state.status.loading);
  const dispatch = useDispatch();

  const handleError = () => {
    setTimeout(() => {
      dispatch(loadingStarted());
      setErrorMessage("*Your Username and/or password do not match");
      dispatch(loadingStopped());
    }, 1700);
  }

  console.log(errorMessage);
  return(
    <MainContainer>
      <Main>
        <Header>
          <Image src={logo} alt="ant design"/>
        </Header>
        <FormContainer>
          <FormTitle>Login</FormTitle>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validations}
            onSubmit= {(values) => {
              setTimeout(() => {
                dispatch(loadingStarted());
                console.log(values);
                dispatch(loadingStopped());
              }, 2000);
            }}
          >
            <Form>
              <FullField name="username" label="Username:" type="text" />
              <TextErrorMessage>{errorMessage ? errorMessage: null}</TextErrorMessage>
              <FullField name="password" label="Password:" type="password" />
              <BContainer>
                <ButtonContainer>
                  <Button type="submit">Login Success</Button>
                  <Button onClick={handleError} type="button">Login Fail</Button>
                </ButtonContainer>
              </BContainer>
            </Form>
          </Formik>
        </FormContainer>
        <Footer>Made with ❤️ by Mentor4u Ximena</Footer>
      </Main>
    </MainContainer>
  )
}

export default SignIn;