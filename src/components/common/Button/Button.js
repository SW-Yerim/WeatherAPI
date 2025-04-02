import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  padding: 5px 15px;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
  // font-size: 12px;

  &:hover {
    background-color: ${(props) => (props.color ? "#fff" : "#333")};
    color: #eee;
  }
`;

const Button = ({ children, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
