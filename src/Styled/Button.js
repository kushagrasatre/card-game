import styled from "styled-components";
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  cursor: ${(props) => {
        if (props.disabled) {
            return "not-allowed"
        }
        return "pointer"
    }}
`;
