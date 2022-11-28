import styled from "styled-components"
import PageTitle from "../../components/header/PageTitle"
import TopNav from "../../components/header/TopNav"
import Link from "next/link";

const StyledSection = styled.section`
padding: 50px 50px 0 50px; 

`;
const StyledP = styled.p`
    text-align: center;
`;

export default function About({title}) {
    return (
        <>
            <TopNav>
                <Link href="/projects" firstLink = "projects" />
                <Link href="/blog" secondLink = "blog" />
            </TopNav>
            <PageTitle title="Hi! I'm Josh" />
            <StyledSection>
                <StyledP>I like to create WebApps.</StyledP>
            </StyledSection>
        </>
    )
}