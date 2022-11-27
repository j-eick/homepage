import styled from "styled-components"
import Link from "next/link";

const StyledDiv = styled.div`
    padding: 30px 30px 20px 30px;
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
