import Layout_Subpage from "../../styles/SubpageLayout";
import Header from "../../../components/header/Header";

export default function RunGraph() {
  return (
    <Layout_Subpage>
      <Header data={[{ href: "/projects", name: "back" }]} />
      <p>stuff</p>
    </Layout_Subpage>
  );
}
