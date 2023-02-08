import { useState } from "react";
import PageHeader from "../../components/header/PageHeader";
import Layout from "../../components/Layout-Subpage";
import Main from "../../components/projectPage";

console.clear();

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: "p1",
      name: "some name",
      description: "some description",
      href: "/projects/run-graph",
    },
    {
      id: "p2",
      name: "some name name",
      description: "some description",
    },
    {
      id: "p3",
      name: "some name name name",
      description: "some description",
    },
    {
      id: "p4",
      name: "some name name name name",
      description: "some description",
    },
    {
      id: "p5",
      name: "some name name name name name",
      description: "some description",
    },
    {
      id: "p6",
      name: "some name name name name name name",
      description: "some description",
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
    </Layout>
  );
}
