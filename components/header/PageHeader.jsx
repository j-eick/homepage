// import PageTitle from "./PageTitle";
import styled from "styled-components";
import TopNav from "./TopNav";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  width: 80%;

  background-color: pink;
  opacity: 1;
`;

export default function PageHeader({ data }) {
  return (
    <StyledHeader>
      <TopNav data={data} />
    </StyledHeader>
  );
}
