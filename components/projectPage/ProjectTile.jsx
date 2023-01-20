console.clear();

import { useState } from "react";
import { StyledLi, StyledP } from "./Main.styles";

export default function ProjectTile() {
  const [tileFocus, setTileFocus] = useState("");

  return (
    <StyledLi
      onClick={() => {
        setTileFocus(!tileFocus);
      }}
    >
      <StyledP>something</StyledP>
    </StyledLi>
  );
}
