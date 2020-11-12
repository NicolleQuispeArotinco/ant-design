import React from "react";
import { MainContainer, Main, Header, FieldContainer , FormTitle, FormField, Label, Button, ButtonContainer, BContainer, FormFieldContainer, ErrorMessageText, FormContainer, Footer, Image } from "../StyledComponents";
import logo from "../images/logo.svg";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

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
          >
            <Form>
              <FullField name="username" label="Username:" type="text" />
              <FullField name="password" label="Password:" type="password" />
              <BContainer>
                <ButtonContainer>
                  <Button>Login Success</Button>
                  <Button>Login Fail</Button>
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