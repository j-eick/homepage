import PageTitle from "./PageTitle";
import TopNav from "./TopNav";

export default function PageHeader({data, title}) {
  return (
    <>
      <TopNav data={data}/>
      <PageTitle title={title}/>
    </>
  )
}