// import Layout_Subpage from "../../../styles/SubpageLayout.module.css";
import Layout_Subpage from "../../../components/Layout-Subpage";
import Header from "../../../components/header/Header";

export default function RunGraph() {
  return (
    <Layout_Subpage>
      <Header data={[{ href: "/projects", name: "back" }]} />
    </Layout_Subpage>
  );
}
