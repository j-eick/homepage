import PageHeader from "../../components/header/PageHeader";
import Layout_Subpage from "../../components/Layout-Subpage";
import Link from "next/link";
import styled from "styled-components";

const StyledP = styled.p`
  padding: 100px 50px 0 50px;
  text-align: center;
  font-size: var(--fontsize_pageText);
`;

export default function About() {
  return (
    <Layout_Subpage>
      <PageHeader
        data={[
          { href: "/projects", name: "projects" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
      />
      <StyledP>
        My name is Josh and I craft applications for the web.
        <br />
        <br />
        I regard coding as an art, which embodies the door to endless creativity and possibilities.
        <br />
        <br />
        <br />
        My <Link href="projects">projects page</Link> gives you an overview over my recent workings.
        <br />
        My <Link href="/blog">blog page</Link> addresses topics that are meaningful to me. This is a chance to get to
        know me a little better.
      </StyledP>
    </Layout_Subpage>
  );
}
