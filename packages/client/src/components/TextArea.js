import styled from "styled-components";
const TextArea = styled.textarea.attrs((props) => ({
  border: props.border || "none",
}))`
  height: 10rem;
  min-width: 100%;
  border: ${(props) => props.border};
  border-radius: 1px;
  padding: 1rem;
  margin: 0 0 1em 0;
`;

export default TextArea;
