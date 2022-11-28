import TopNav from "../../components/header/TopNav"
import PageTitle from "../../components/header/PageTitle"

export default function Projects({title}) {
    return (
        <>
            <TopNav />
            <PageTitle title={"Some things in the making"}/>
            <p>This is the Project page</p>
        </>
    )
}