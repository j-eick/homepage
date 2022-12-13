import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;

  @media screen and (min-width: 400px) {
    width: 375px;
    height: 667px;
    border: 1px solid black;
  }
`;

const StyledLi = styled.li`
  font-size: var(--fontsize_profileButtons);
  text-align: center;
  list-style: none;
  margin: 50px 0;
`;

export default function Home() {
  return (
    <>
      <Layout>
        <StyledContainer>
          <StyledMain>
            <ul>
              <StyledLi>
                <Link href="/about">about</Link>
              </StyledLi>
              <StyledLi>
                <Link href="/projects">projects</Link>
              </StyledLi>
              <StyledLi>
                <Link href="/blog">blog</Link>
              </StyledLi>
            </ul>
          </StyledMain>
        </StyledContainer>
      </Layout>
    </>
  );
}
