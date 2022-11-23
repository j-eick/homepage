import { useRouter } from "next/router";

export default function ProjectList() {
    const router = useRouter();

    console.log(router.query.projectsId); 

    return (
        <>
            <p>This is the main page</p>
        </>
    )
}