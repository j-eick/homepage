import styled from "styled-components";

const StyledSection = styled.section`
  padding: 30px 50px;
`;
const StyledArticle = styled.article`
  padding: 0 0 30px 0;
`;
const StyledH1 = styled.h1`
  padding: 0 0 10px 20px;
  font-size: var(--fontsize_pageTitles);
`;
const StyledP = styled.p`
  padding: 0 0 10px 0;
  font-size: var(--fontsize_pageText);
`;

export default function Main() {
  return (
    <>
      <StyledSection>
        <StyledArticle>
          <StyledH1>Topic 1</StyledH1>
          <StyledP>
            Aute in consectetur aliqua aliquip labore duis culpa exercitation nisi dolor excepteur deserunt officia
            magna.{" "}
          </StyledP>
        </StyledArticle>
        <StyledArticle>
          <StyledH1>Topic 2</StyledH1>
          <StyledP>
            Exercitation reprehenderit ut id labore commodo. Ipsum sint eiusmod velit voluptate. Excepteur est pariatur
            esse anim eu deserunt esse amet.{" "}
          </StyledP>
        </StyledArticle>
      </StyledSection>
    </>
  );
}
