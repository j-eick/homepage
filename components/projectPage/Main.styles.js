import styled from "styled-components";

export const StyledUl = styled.ul`
  padding: 50px 70px 50px 70px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  /* min-height: calc(100% - 100px); */
`;
export const StyledLi = styled.li`
  display: grid;
  place-items: center;

  height: 100px;
  position: relative;
  background: rgba(108, 137, 153, 0.6);
  /* background: rgb(35, 53, 65); */
  /* background: linear-gradient(20deg, rgba(37, 51, 59, 0.5) 0%, rgba(63, 147, 162, 0.5) 98%); */
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 25px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:hover::after {
    opacity: 1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
`;
export const StyledP = styled.p`
  font-size: var(--fontsize_pageText);
`;
