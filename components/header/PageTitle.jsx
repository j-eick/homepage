import styled from "styled-components";

const StyledH1 = styled.h1`
  padding: 40px 30px;
  text-align: center;
  font-size: var(--fontsize_pageTitles);
  /* background-color: lightblue; */
`;

export default function PageTitle({ title }) {
  return (
    <>
      <StyledH1>{title}</StyledH1>
    </>
  );
}
