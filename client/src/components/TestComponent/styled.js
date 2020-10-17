import styled from "styled-components";

const Wrapper = styled.div.attrs(({ parentScroll }) => ({
  style: { backgroundPosition: `50% ${100 * parentScroll}%` },
}))`
  align-items: center;
  background-image: url(${(props) => props.sampleImage.urls.small});
  background-repeat: no-repeat;
  background-size: 150% 150%;
  border: 1px solid red;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default Wrapper;
