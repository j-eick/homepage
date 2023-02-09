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
