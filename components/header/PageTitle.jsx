import styled from "styled-components"

const StyledH1 = styled.h1`
    padding: 0 30px 0 30px;
    text-align: right;
    font-size: var(--fontsize_pageTitles);
`;

export default function PageTitle() {
  return (
    <>
      <StyledH1>This is the Blog page</StyledH1>
    </>
  )
}
