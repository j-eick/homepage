import styled from "styled-components";

const StyledH1 = styled.h1`
  padding: 0 50px 30px 50px;
  text-align: left;
  font-size: var(--fontsize_pageTitles);
`;

export default function PageTitle({ title }) {
  return (
    <>
      <StyledH1>{title}</StyledH1>
    </>
  );
}
