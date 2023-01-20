import Main from "../../components/blogPage/Main";
import TopNav from "../../components/header/TopNav";
import Layout from "../../components/Layout-Subpage";

export default function Blog() {
  return (
    <Layout>
      <TopNav
        data={[
          { href: "/about", name: "about" },
          { href: "/projects", name: "projects" },
          { href: "/", name: "home" },
        ]}
      />
      <Main />
    </Layout>
  );
}
