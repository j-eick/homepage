import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/aboutPage/Main";
import styled from "styled-components";

// const StyledContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: grid;
//   justify-content: center;
//   align-content: center;
// `;

// const StyledMain = styled.main`
//   width: 100%;
//   height: 100%;
//   display: grid;
//   justify-content: center;
//   align-content: center;

//   @media screen and (min-width: 400px) {
//     width: 375px;
//     height: 667px;
//     border: 1px solid black;
//   }
// `;

export default function About() {
  return (
    <>
      {/* <StyledContainer>
        <StyledMain> */}
      <PageHeader
        data={[
          { href: "/projects", name: "projects" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
        title={"Hi!"}
      />
      <Main />
      {/* </StyledMain>
      </StyledContainer> */}
    </>
  );
}
