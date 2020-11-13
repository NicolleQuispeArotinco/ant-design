import React, { useState } from "react";
import { MainContainer, Main, Header, FieldContainer , FormTitle, FormField, Label, Button, ButtonContainer, BContainer, FormFieldContainer, ErrorMessageText, FormContainer, Footer, Image, TextErrorMessage, LittleCircle, BigCircle, FormikForm, BigDiamond, Square, LittleDiamond } from "../StyledComponents";
import logo from "../icons/logo.svg";
import littleCircle from "../icons/littleCircle.svg";
import bigCircle from "../icons/bigCircle.svg";
import bigDiamond from "../icons/bigDiamond.svg";
import square from "../icons/square.svg";
import littleDiamond from "../icons/littleDiamond.svg";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { loadingFailStopped, loadingFailStarted, loadingSuccessStopped, loadingSuccessStarted } from "../app/statusSlice";
import { useHistory } from "react-router-dom";
import '../App.css';

const validations = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(6, "Password must have more than 5 characters").required("Password is required"),
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

function Spinner () {
  return(
    <div className="loader"></div>
  )
}

function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const loadingFail = useSelector((state) => state.status.loadingFail);
  const loadingSuccess = useSelector((state) => state.status.loadingSuccess);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleError = () => {
    dispatch(loadingFailStarted());
    setTimeout(() => {
      setErrorMessage("*Your Username and/or password do not match");
      dispatch(loadingFailStopped());
    }, 1500);
  }

  console.log(errorMessage);
  return(
    <MainContainer>
      <Main>
        <Header>
          <LittleCircle src={littleCircle} alt="little circle"/>
          <Image src={logo} alt="ant design"/>
          <BigCircle src={bigCircle} alt="big circle"/>
        </Header>
        <FormContainer>
          <LittleDiamond src={littleDiamond} alt="little diamond"/>
          <FormTitle>Login</FormTitle>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validations}
            onSubmit= {(values) => {
              dispatch(loadingSuccessStarted());
              setTimeout(() => {
                console.log("Redirect to Home Page");
                dispatch(loadingSuccessStopped());
                history.push("/home");
              }, 2000);
              
            }}
          >
            <FormikForm>
              <FullField name="username" label="Username:" type="text" />
              <TextErrorMessage>{errorMessage ? errorMessage: null}</TextErrorMessage>
              <FullField name="password" label="Password:" type="password" />
              <BContainer>
                <ButtonContainer>
                  <Button type="submit">{loadingSuccess ? <Spinner/> : "Login Success" }</Button>
                  <Button onClick={handleError} type="button">
                    {loadingFail ? <Spinner/> : "Login Fail" }
                  </Button>
                </ButtonContainer>
              </BContainer>
            </FormikForm>
          </Formik>
          <BigDiamond src={bigDiamond} alt="Big diamond" />
        </FormContainer>
        <Square src={square} alt="square"/>
        <Footer>Made with ❤️ by Mentor4u Ximena</Footer>
      </Main>
    </MainContainer>
  )
}

export default SignIn;