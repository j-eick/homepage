import styled from "styled-components";
import Link from "next/link";

// const StyledDiv = styled.div`
//   padding: 40px 50px 20px 50px;
//   text-align: right;
//   font-size: var(--fontsize_pageTopLinks);
// `;
const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 2fr;
  gap: 5px 5px;
  /* grid-template-rows: 100%; */
  padding: 20px 20px;
  background-color: red;
`;
const StyledLi = styled.li`
  list-style: none;
  text-align: center;
  border: 1px solid black;
  &:last-child {
    text-align: right;
  }
`;

console.clear();

export default function TopNav({ data }) {
  return (
    // <StyledDiv>
    <nav>
      <StyledUl>
        {data.map((item) => (
          <StyledLi key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </nav>
    // </StyledDiv>
  );
}
