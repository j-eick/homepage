// import PageHeader from "../../components/header/PageHeader";
import PageHeader from "../../components/header/PageHeader";
import PageTitle from "../../components/header/PageTitle";
import TopNav from "../../components/header/TopNav";

export default function About() {

    return (
        <>
            <PageHeader 
                data={[
                        {href:'/projects', name:'projects'},
                        {href:'/blog', name:'blog'},
                        {href:'/', name: 'home'}]
                    }
                title={"Hi!"}
            />
        </>
    )
}