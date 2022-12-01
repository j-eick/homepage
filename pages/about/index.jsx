import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/aboutPage/Main";

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
            <Main />
        </>
    )
}