import { transform } from "framer-motion";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import sampleImages from "../../images/sampleImages.json";

import { AppContext } from "../../AppState";
import Wrapper from "./styled";

const TestComponent = () => {
  const {
    state: { visibleArea },
  } = useContext(AppContext);
  const sampleImage = useMemo(
    () => sampleImages[Math.floor(Math.random() * sampleImages.length)],
    []
  );
  const wrapperRef = useRef();
  const [wrapperDimensions, setWrapperDimensions] = useState(null);

  useEffect(() => {
    setWrapperDimensions(() => wrapperRef.current.getBoundingClientRect());
  }, []);

  return (
    <Wrapper
      parentScroll={transform(
        visibleArea?.bottom - wrapperDimensions?.top,
        [0, visibleArea?.clientHeight + wrapperDimensions?.height],
        [0, 1]
      )}
      ref={wrapperRef}
      sampleImage={sampleImage}
    ></Wrapper>
  );
};

export default TestComponent;
