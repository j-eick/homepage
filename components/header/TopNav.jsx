import styled from "styled-components";
import Link from "next/link";

const StyledUl = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5fr 1.5fr 2fr;
  justify-items: center;
  gap: 5px 5px;
  padding: 30px 20px 30px 20px;
  /* background-color: red; */
`;
const StyledLi = styled.li`
  width: 80%;
  font-size: var(--fontsize_profileButtons);
  list-style: none;
  text-align: center;
  &:last-child {
    text-align: right;
  }
`;

console.clear();

export default function TopNav({ data }) {
  return (
    <nav>
      <StyledUl>
        {data.map((item) => (
          <StyledLi key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </nav>
  );
}
