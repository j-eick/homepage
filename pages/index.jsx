import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledLi = styled.li`
  font-size: var(--fontsize_profileButtons);
  text-align: center;
  list-style: none;
  margin: 50px 0;
`;

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
