console.clear();

import { useState } from "react";
import { StyledLi, StyledP } from "./Main.styles";
import Link from "next/link";

console.clear();

export default function ProjectTile() {
  const [tileFocus, setTileFocus] = useState("");

  return (
    <Link href="/projects/run-graph">
      <StyledLi>
        <StyledP>something</StyledP>
      </StyledLi>
    </Link>
  );
}
