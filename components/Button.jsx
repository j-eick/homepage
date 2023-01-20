import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  border: 2px solid #764abc;
  border-radius: 25px;
  color: #764abc;
  padding: 10px 20px;
  transition: all 1s;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #764abc;
    transition: all 1s;
  }
`;

const Button = () => {
  return <StyledButton>Bla</StyledButton>;
};

export default Button;

/**

 */
