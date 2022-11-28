import styled from "styled-components";
import TopNav from "../../components/header/TopNav";
import PageTitle from "../../components/header/PageTitle";

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
            <TopNav /> 
            <PageTitle /> 
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