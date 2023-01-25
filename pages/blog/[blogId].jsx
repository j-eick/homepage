import { useRouter } from "next/router";

export default function BlogList() {
    const router = useRouter();

    console.log(router.query.BlogList); 

    return (
        <>
            <p>This is another blog page</p>
        </>
    )
}