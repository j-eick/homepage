import styled from "styled-components";
import Link from "next/link";

const StyledNav = styled.nav`
  width: 85%;
  height: 70px;

  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  place-items: center;

  border-radius: 20px;

  backdrop-filter: blur(20px);
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledLi = styled.li`
  font-size: var(--fontsize_profileButtons);
`;

export default function Header({ data }) {
  return (
    <StyledNav>
      <StyledUl>
        {data.map((navItem) => (
          <StyledLi key={navItem.name}>
            <Link href={navItem.href}>{navItem.name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
}
