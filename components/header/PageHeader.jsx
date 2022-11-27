import BackArrow from "./BackArrow";
import PageTitle from "./PageTitle";

export default function PageHeader({title}) {
  return (
      <>
        <BackArrow />
        <PageTitle title={title}/>
      </>
  )
}
