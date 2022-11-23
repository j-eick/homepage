import { useRouter } from "next/router";
import Link from "next/link";
import styled from 'styled-components';

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
`;

const StyledUl = styled.ul`
`;

const StyledLi = styled.li`
    text-align: center;
    list-style: none;
    margin: 50px 0; 
`;

export default function Home() {
    return (
        <>
            <StyledMain>
                <StyledUl>
                    <StyledLi>
                        <Link href="/about">about</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link href="/projects">projects</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link href="/blog">blog</Link>
                    </StyledLi>
                </StyledUl>
            </StyledMain>
        </>
    )
}