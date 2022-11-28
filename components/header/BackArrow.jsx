import styled from "styled-components"
import Link from "next/link";

const StyledDiv = styled.div`
    padding: 30px 50px 20px 50px;
    text-align: right;
    font-size: var(--fontsize_pageTitles);
`;

export default function BackArrow() {
  return (
    <StyledDiv>
      <Link href="/">⬅</Link>
    </StyledDiv>
  )
}
