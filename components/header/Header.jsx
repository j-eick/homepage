import styled from "styled-components";
import Link from "next/link";

export default function Header({ data }) {
  return (
    <nav>
      <ul>
        {data.map((navItem) => (
          <li key={navItem.name}>
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
