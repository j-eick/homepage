import { useState } from "react";
import Layout_Subpage from "../../components/Layout-Subpage";
import { StyledLi, StyledUl } from "../../components/projectPage/styles.js";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import Link from "next/link";

console.clear();

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: "p1",
      name: "Run-Graph",
      href: "/projects/run-graph",
      description: "some description",
    },
    {
      id: "p2",
      name: "Vocab-Dojo",
      href: "/projects/vocab-dojo",
      description: "more soon...",
    },
    {
      id: "p3",
      name: "Code2Gather",
      href: "/projects/code2gather",
      description: "more soon...",
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
