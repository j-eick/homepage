// import Link from "next/link";
// import styled from "styled-components";
// import ProjectTile from "./ProjectTile.jsx";
import Link from "next/link.js";
import { StyledP, StyledLi, StyledUl } from "./Main.styles.js";

console.clear();

export default function Main({ projects }) {
  return (
    <>
      <StyledUl>
        {projects.map((project) => (
          <StyledLi key={project.id}>
            <StyledP>{project.name}</StyledP>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}
