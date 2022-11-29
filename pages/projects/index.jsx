import Link from "next/link";
import TopNav from "../../components/header/TopNav";

export default function Projects() {
    return (
        <>
            <TopNav data={
                [
                    {href: "/about", name: "about"},
                    {href: "/projects", name: "blog"},
                    {href: "/", name: "home"}
                ]
            } />
            <p>This is the Project page</p>
        </>
    )
}