// import PageTitle from "./PageTitle";
import styled from "styled-components";
import Link from "next/link";

const StyledNav = styled.nav`
  width: 90%;
  /* height: 100px;
  background-color: lightgreen; */
  opacity: 0.6;
  margin-top: 30px;
  padding: 0px 20px;

  display: grid;
  place-items: center;

  /* background: rgba(125, 150, 163, 0.4); */
  backdrop-filter: blur(15px);
  border-radius: 30px;
`;

const StyledUl = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border: 1px solid black;
`;
const StyledLi = styled.li`
  font-size: var(--fontsize_profileButtons);
  list-style: none;
  text-align: center;

  /* border: 0.1px solid black; */
`;

export default function PageHeader({ data }) {
  return (
    <>
      <StyledNav>
        <StyledUl>
          {data.map((item) => (
            <StyledLi key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledNav>
    </>
  );
}
