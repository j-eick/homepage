import Link from "next/link";
import styled from "styled-components";

const StyledP = styled.p`
  padding: 20px 50px;
  text-align: center;
`;

const StyledUl = styled.ul`
  background-color: red;

  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  padding: 0px 40px;
`;

const StyledLi = styled.li`
  background-color: lightblue;

  height: 50px;
`;

export default function Main() {
  return (
    <StyledUl>
      <StyledLi>something</StyledLi>
      <StyledLi>something</StyledLi>
      <StyledLi>something</StyledLi>
      <StyledLi>something</StyledLi>
    </StyledUl>
  );
}
