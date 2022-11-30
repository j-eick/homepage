import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';
import TopNav from "../components/header/TopNav";

/**
 * // TODO Conditional Based Routing as suggested on StackOverflow: 
 * - https://stackoverflow.com/questions/74601623/how-to-prop-drill-varying-hrefs-for-various-link-components-down-to-the-original?noredirect=1&lq=1
 * - Unclear how to implement
 */

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
`;

const StyledLi = styled.li`
    font-size: var(--fontsize_profileButtons);
    text-align: center;
    list-style: none;
    margin: 50px 0; 
`;

export default function Home() {
    const {asPath} = useRouter();

    const getData = () => {
        if (asPath ==="/about") {
          return (
            [
              {href: "/projects", name: "about"},
              {href: "/blog", name: "blog"},
              {href: "/", name: "home"}
            ]
          );
        }
        if (asPath ==="/projects") {
          return (
            [
              {href: "/about", name: "about"},
              {href: "/blog", name: "blog"},
              {href: "/", name: "home"}
            ]
          );
        }
        if (asPath === "/blog") {
          return (
            [
              {href: "/about", name: "about"},
              {href: "/projects", name: "projects"},
              {href: "/", name: "home"}
            ]
          )
        }
      }

    return (
        <>
        <TopNav data={getData()} />
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
        </>
    )
}