import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 30px 30px 20px 30px;
    text-align: right;
    font-size: var(--fontsize_pageTitles);
`;

export default function PageHeader() {
  return (
      <StyledHeader>
        <Link href="/">⬅</Link>
      </StyledHeader>
  )
}
