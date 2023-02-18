import Main from "../../components/blogPage/Main";
import TopNav from "../../components/header/TopNav";
import Layout from "../../components/Layout-Subpage";
import PageHeader from "../../components/header/PageHeader";

export default function Blog() {
  return (
    <Layout>
      <PageHeader
        data={[
          { href: "/about", name: "about" },
          { href: "/projects", name: "projects" },
          { href: "/", name: "home" },
        ]}
        title={"Hi!"}
      />
      <Main />
    </Layout>
  );
}
