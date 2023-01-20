import Link from "next/link";
import styled from "styled-components";
import { StyledUl, StyledLi, StyledP } from "./Main.styles.js";

console.clear();

// const StyledUl = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 30px;
//   padding: 0px 50px;
// `;
// const StyledLi = styled.li`
//   display: grid;
//   place-items: center;

//   height: 80px;
//   position: relative;
//   box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
//   border-radius: 20px;
//   transition: all 0.1s ease-in-out;
//   &:hover {
//     transform: scale(1.1);
//   }
//   &:hover::after {
//     opacity: 1;
//   }
//   &::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
//     border-radius: 20px;
//     opacity: 0;
//     transition: opacity 0.1s ease-in-out;
//   }
// `;
// const StyledP = styled.p`
//   font-size: var(--fontsize_pageText);
// `;

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
