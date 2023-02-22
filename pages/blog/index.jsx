import Main from "../../components/blogPage/Main";
import Layout_Subpage from "../../components/Layout-Subpage";
import PageHeader from "../../components/header/PageHeader";

export default function Blog() {
  return (
    <Layout_Subpage>
      <PageHeader
        data={[
          { href: "/about", name: "about" },
          { href: "/projects", name: "projects" },
          { href: "/", name: "home" },
        ]}
      />
      <Main />
    </Layout_Subpage>
  );
}
