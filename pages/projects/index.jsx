import { useState } from "react";
import PageHeader from "../../components/header/PageHeader";
import Layout from "../../components/Layout-Subpage";
import Main from "../../components/projectPage";
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
    <Layout>
      <PageHeader
        data={[
          { href: "/about", name: "about" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
        title={"A little overview..."}
      />
      <Main projects={projects} />
      {console.log(projects)}
      <Footer />
    </Layout>
  );
}
