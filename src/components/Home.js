import React from "react";
import logo from "../icons/logoHome.svg";
import circle from "../icons/logoHome2.svg";
import { Image, LogoContainer, FormField, LogoSearchContainer, SignOutButton, Header, Footer, Main} from "../StyledComponentsHome";
import { useHistory } from "react-router-dom";

function Home () {
  const history = useHistory();

  const handleSignUp = () => {
    setTimeout(() => {
      history.push("/");
    }, 1700);
  }

  return(
    <Main>
      <Header>
        <LogoSearchContainer>
          <LogoContainer>
            <Image src={logo} alt="ant design"/>
            <img src={circle} alt="ant design"/>
          </LogoContainer>
          <FormField type="text" name="search" />
        </LogoSearchContainer>
        <SignOutButton onClick={handleSignUp}>Sign out</SignOutButton>
      </Header>
      <Footer>Made with ❤️ by Mentor4u Ximena </Footer>
    </Main>
  )
}

export default Home;