import Main from "../../components/blogPage/Main";
import TopNav from "../../components/header/TopNav";
import Layout from "../../components/SubpageLayout";

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
