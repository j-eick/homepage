import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/projects">projects</Link>
                </li>
                <li>
                    <Link href="/blog">blog</Link>
                </li>
            </ul>
        </>
    )
}