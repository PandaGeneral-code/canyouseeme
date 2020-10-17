import React, { useContext, useEffect, useRef, useState } from "react";

import { AppContext } from "../../AppState";
import Wrapper from "./styled";

const TestComponent = () => {
  const {
    state: { visibleArea },
  } = useContext(AppContext);
  const wrapperRef = useRef();
  const [wrapperDimensions, setWrapperDimensions] = useState(null);

  useEffect(() => {
    console.log("Visible area changed");
  }, [visibleArea]);

  useEffect(() => {
    setWrapperDimensions(() => wrapperRef.current.getBoundingClientRect());
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <div>Component Top: {wrapperDimensions?.top}</div>
      <div>Component Bottom: {wrapperDimensions?.bottom}</div>
      <div>
        In view:{" "}
        {wrapperDimensions?.top <= visibleArea?.bottom ? "true" : "false"}
      </div>
    </Wrapper>
  );
};

export default TestComponent;
