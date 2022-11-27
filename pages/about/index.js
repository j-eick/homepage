import PageTitle from "../../components/header/PageTitle"
import TopNav from "../../components/header/TopNav"

export default function About({title, projects}) {
    return (
        <>
            <TopNav>
            </TopNav>
            <PageTitle title="Hi! I'm Josh" projects={projects}/>
            <p>Here is some text about me.</p>
        </>
    )
}