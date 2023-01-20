import Link from "next/link";
import styled from "styled-components";
import { StyledUl, StyledLi, StyledP } from "./Main.styles.js";

console.clear();

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
