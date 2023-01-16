import PageHeader from "../../components/header/PageHeader";
import Layout from "../../components/Layout-Subpage";

export default function Projects() {
  return (
    <Layout>
      <PageHeader
        data={[
          { href: "/about", name: "about" },
          { href: "/blog", name: "blog" },
          { href: "/", name: "home" },
        ]}
        title={"Hi!"}
      />
      <p>This is the Project page</p>
    </Layout>
  );
}
