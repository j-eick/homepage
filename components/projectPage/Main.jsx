import Link from "next/link";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 0px 50px;
`;
const StyledLi = styled.li`
  display: grid;
  place-items: center;

  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-radius: 20px;
  &:after:hover {
    transition: box-shadow 0.3s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
const StyledP = styled.p`
  font-size: var(--fontsize_pageText);
`;

export default function Main() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledP>something</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledP>something</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledP>something</StyledP>
      </StyledLi>
      <StyledLi>
        <StyledP>something</StyledP>
      </StyledLi>
    </StyledUl>
  );
}
