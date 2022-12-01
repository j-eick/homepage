import Main from "../../components/blogPage/Main";
import TopNav from "../../components/header/TopNav";

export default function Blog() {
  return (
    <>
      <TopNav
        data={[
          { href: "/about", name: "about" },
          { href: "/projects", name: "projects" },
          { href: "/", name: "home" },
        ]}
      />
      <Main />
    </>
  );
}
