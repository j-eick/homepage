import { useState } from "react";
import Layout_Subpage from "../../components/Layout-Subpage";
import { StyledLi, StyledUl } from "./projects.styles.js";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: "p1",
      name: "Run-Graph",
      description: "some description",
      href: "/projects/run-graph",
    },
    {
      id: "p2",
      name: "Vocab-Dojo",
      description: "more soon...",
      href: "/projects/vocab-dojo",
    },
    {
      id: "p3",
      name: "Code2Gather",
      description: "more soon...",
      href: "/projects/code2gather",
    },
  ]);

  return (
    <Layout_Subpage>
      <Header
        data={[
          { href: "/about", name: "about" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
      />
      <StyledUl>
        {projects.map((project) => (
          <StyledLi key={project.id}>
            <Link href={project.href}>{project.name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
      <Footer />
    </Layout_Subpage>
  );
}
