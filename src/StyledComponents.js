import styled from "@emotion/styled";
import { Field } from "formik";

export const MainContainer = styled.div`
  width: 100%;
  background-color: #00172F;
  height: 100vh;
`;

export const Main = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-areas: 
    "header ."
    ". form"
    ". footer";
  grid-column-gap: 130px;
  height: 100%;
`

export const Header = styled.header`
  grid-area: header;
`
export const Content = styled.div`
  grid-area: content;

`
export const FormContainer = styled.div`
  grid-area: form;
  width: 50%;
  margin: 0 auto;
`

export const FormTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 47px;
  color: #000000;
  text-align: center;
`

export const FormField = styled(Field)`
  padding: 6px 8px;
  border-radius: 5px;
  border: none;
  width: 94%;
`

export const Label = styled.label`
  font-family: Mako;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin-right: 15px;
`

export const FieldContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
`

export const Button = styled.button`
  background: #212121;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  border: none;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  padding: 6px 12px;
`

export const ButtonContainer = styled.div`
  width: 76%;
  display: flex;
  justify-content: space-between;
`

export const BContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const FormFieldContainer = styled.div`
  width: 76%;
`

export const ErrorMessageText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #F51D2C;
`

export const Footer = styled.footer`
  grid-area: footer;
  margin-top: 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 18px;
  text-align: right;
  color: #FFFFFF;
`

export const Image = styled.img`
  margin: 25px 0;
`