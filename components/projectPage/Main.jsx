// import Link from "next/link";
// import styled from "styled-components";
import { StyledUl } from "./Main.styles.js";
import ProjectTile from "./ProjectTile.jsx";

console.clear();

export default function Main() {
  return (
    <StyledUl>
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </StyledUl>
  );
}
