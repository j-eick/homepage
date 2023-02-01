console.clear();

import { useState } from "react";
import { StyledLi, StyledP } from "./Main.styles";

console.clear();

export default function ProjectTile() {
  const [tileFocus, setTileFocus] = useState("");

  return (
    <StyledLi
      onClick={() => {
        alert("ji");
      }}
    >
      <StyledP>something</StyledP>
    </StyledLi>
  );
}
