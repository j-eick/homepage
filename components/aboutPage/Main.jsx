import Link from "next/link";
import styled from "styled-components";

const StyledP = styled.p`
  padding: 50px 50px 30px 50px;
  text-align: center;
`;

export default function Main() {
  return (
    <>
      <StyledP>My name is Josh and I craft applications for the web. 
        <br /><br /> 
      I regard coding as an art, which embodies the door to endless
      creativity and possibilities.
        <br /><br /><br /> 
      My <Link href="projects">projects page</Link> gives you an
      overview over my recent workings. 
        <br /> 
      My <Link href="/blog">blog page</Link> addresses topics that 
      are meaningful to me. This is a chance to get to know me a 
      little better. 
      </StyledP>
    </>
  )
}
