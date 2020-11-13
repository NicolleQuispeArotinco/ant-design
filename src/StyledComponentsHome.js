import styled from "@emotion/styled";

export const Image = styled.img`
  position: relative;
  left: 8px;
  bottom: 3px;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 24%;
`

export const FormField = styled.input`
  padding: 6px 8px;
  background: #EEF4FD;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 2px;
  margin-left: 20px;
`

export const LogoSearchContainer = styled.div`
  display: flex;
`

export const SignOutButton = styled.button`
  border: none;
  background: #212121;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 5px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  padding: 10px 15px;
  cursor: pointer;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  grid-area: header;
`

export const Footer = styled.footer`
  font-family: Menlo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  text-align: right;
  color: #000000;
  grid-area: footer;
`

export const Main = styled.div`
  width: 90%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 15fr 1fr;
  grid-template-areas: 
    "header"
    "."
    "footer";
`