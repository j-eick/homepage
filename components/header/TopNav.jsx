import styled from "styled-components";
import Link from "next/link";

const StyledDiv = styled.div`
  padding: 30px 50px 20px 50px;
  text-align: right;
  font-size: var(--fontsize_pageTopLinks);
`;
const StyledLi = styled.li`
  list-style: none;
`;

console.clear();

export default function TopNav({data}) {

  const array = [1, 2, 3];
    
  return (
    <StyledDiv>
      <nav>
        <ul>
          {data.map(item => (
              <StyledLi key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </StyledLi>
              )
          )}
        </ul>
      </nav>
    </StyledDiv>
  )
}