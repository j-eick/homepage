import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/aboutPage/Main";
import Layout from "../../components/SubpageLayout";

export default function About() {
  return (
    <Layout>
      <PageHeader
        data={[
          { href: "/projects", name: "projects" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
        title={"Hi!"}
      />
      {/* <Main /> */}
    </Layout>
  );
}
