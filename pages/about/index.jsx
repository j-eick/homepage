// import PageHeader from "../../components/header/PageHeader";
import PageTitle from "../../components/header/PageTitle";
import TopNav from "../../components/header/TopNav";

export default function About() {

    return (
        <>
            <TopNav data={
                [ 
                    {href:'/projects', name:'projects'},
                    {href:'/blog', name:'blog'},
                    {href:'/', name: 'home'}
                ]
            }/>
            <PageTitle title={"Title: About me"}/>
        </>
    )
}