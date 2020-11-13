import styled from "@emotion/styled";
import { Field, Form} from "formik";

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
  height: 100%;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    "header"
    "form"
    "footer";
  }
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
  @media (max-width: 1200px) {
    width: 50%;
    margin: 60px auto;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin: 60px auto;
  }
  
`

export const FormTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 47px;
  color: #000000;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 0;
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
  cursor: pointer;
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
  color: #c93e47;
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
  position: relative;
  @media (max-width: 768px) {
    position: relative;
    z-index: 1;
  }
`

export const TextErrorMessage = styled.p`
  margin: 0;
  padding: 0 0 20px 41px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #F51D2C;
`

export const LittleCircle = styled.img`
  position: absolute;
  top: 12px;
  left: 142px;
  @media (max-width: 1024px) {
    left: 124px;
  }
`

export const BigCircle = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`

export const FormikForm = styled(Form)`
  position: relative;
  z-index: 1;
  max-width: 350px;
`

export const BigDiamond = styled.img`
  position: absolute;
  top: 0;
  right: 136px;
  @media (max-width: 1024px) and (min-width: 769px) {
    right: 166px;
  }

  @media (max-width: 768px) {
    right: 74px;
    top: 71px;
  }
  
`

export const Square = styled.img`
  position: absolute;
  right: 0;
  bottom: 100px;
`

export const LittleDiamond = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`