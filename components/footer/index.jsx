import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: pink;
  position: sticky;
  bottom: 0;

  height: 50px;
  width: 80%;
`;

export default function Footer() {
  return (
    <>
      <StyledDiv></StyledDiv>
    </>
  );
}
