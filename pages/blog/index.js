import Link from "next/link";
import styled from "styled-components";
// import PageHeader from "../../components/header/PageHeader";

const StyledHeader = styled.header`
    padding: 30px 30px 20px 30px;
    text-align: right;
    font-size: var(--fontsize_pageTitles);
`;
const StyledH1 = styled.h1`
    padding: 0 30px 0 30px;
    text-align: right;
    font-size: var(--fontsize_pageTitles);
`;
const StyledSection = styled.section`
    padding: 30px;
`;
const StyledArticle = styled.article`
    padding: 0 0 30px 0;
`;
const StyledH2 = styled.h2`
    padding: 0 0 10px 0;
`;
const StyledP = styled.p`
    padding: 0 0 10px 0;
`;

export default function Projects() {
    return (
        <>
            {/* <PageHeader />  */}
            <StyledSection>
                <StyledArticle>
                    <StyledH2>Topic 1</StyledH2>
                    <StyledP>Aute in consectetur aliqua aliquip labore duis culpa exercitation nisi dolor excepteur deserunt officia magna. </StyledP>
                </StyledArticle>
                <StyledArticle>
                    <StyledH2>Topic 2</StyledH2>
                    <StyledP>Exercitation reprehenderit ut id labore commodo. Ipsum sint eiusmod velit voluptate. Excepteur est pariatur esse anim eu deserunt esse amet. </StyledP>
                </StyledArticle>
            </StyledSection>
        </>
    )
}