import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import Head from "next/head";

const StyledLi = styled.li`
  font-size: var(--fontsize_landingpageFontsize);
  text-align: center;
  list-style: none;
  margin: 60px 0;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title key="title">Vocab-Dojo</title>
        <meta key="description" name="description" content="This is my project" />
      </Head>
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
