import { useState } from "react";
import PageHeader from "../../components/header/PageHeader";
import Layout_Subpage from "../../components/Layout-Subpage";
import { StyledP, StyledLi, StyledUl } from "../../components/projectPage/Main.styles";
import Footer from "../../components/footer";

console.clear();

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
    },
    {
      id: "p3",
      name: "Code2Gather",
      description: "more soon...",
    },
  ]);

  return (
    <Layout_Subpage>
      <PageHeader
        data={[
          { href: "/about", name: "about" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
      />
      <StyledUl>
        {projects.map((project) => (
          <StyledLi key={project.id}>
            <StyledP>{project.name}</StyledP>
          </StyledLi>
        ))}
      </StyledUl>
      <Footer />
    </Layout_Subpage>
  );
}
