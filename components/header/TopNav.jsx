import styled from "styled-components"
import Link from "next/link";

const StyledDiv = styled.div`
    padding: 30px 50px 20px 50px;
    text-align: right;
    font-size: var(--fontsize_pageTopLinks);
`;
const StyledLi = styled.li`
  list-style: none;
`;

export default function TopNav() {
  return (
    <StyledDiv>
      <nav>
        <ul>
          <StyledLi>
            <Link href="/"></Link>
          </StyledLi>
          <StyledLi>
            <Link href="/"></Link>
          </StyledLi>
          <StyledLi>
            <Link href="/">⬅</Link>
          </StyledLi>
        </ul>
      </nav>
    </StyledDiv>
  )
}
