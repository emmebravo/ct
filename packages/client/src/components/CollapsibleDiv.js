import styled from "styled-components";
//TODO: fine-tune transition behavior (line 6)
const CollapsibleDiv = styled.div`
  max-height: ${(props) => (props.hidden ? "0" : "7500px")};
  padding: ${(props) => (props.hidden ? "0" : "1.5rem")};
  transition: all 1000ms;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
`;

/*
Extra declarations for CollapsibleDiv's CSS rule:
border: solid red 2px;
width: 100%;
justify-content: center;
align-content: center;
position: static;
transform: scaleY(1);
transform-origin: top;
*/

export default CollapsibleDiv;
