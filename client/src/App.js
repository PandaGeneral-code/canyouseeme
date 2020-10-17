import React, { useCallback, useContext, useEffect, useRef } from "react";

import { AppContext, SET_VISIBLE_AREA } from "./AppState";
import TestComponent from "./components/TestComponent/TestComponent";
import Wrapper, { Content } from "./styled";

const App = () => {
  const { dispatch, state } = useContext(AppContext);
  const wrapperRef = useRef();

  const handleVisibleArea = useCallback(
    (clientHeight, scrollTop) => {
      dispatch({
        type: SET_VISIBLE_AREA,
        visibleArea: { bottom: scrollTop + clientHeight, top: scrollTop },
      });
    },
    [dispatch]
  );

  const handleScroll = useCallback(
    ({ target: { clientHeight, scrollTop } }) => {
      handleVisibleArea(clientHeight, scrollTop);
    },
    [handleVisibleArea]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const wrapperDimensions = wrapperRef.current.getBoundingClientRect();
    dispatch({
      type: SET_VISIBLE_AREA,
      visibleArea: {
        bottom: wrapperDimensions.height,
        top: wrapperDimensions.y,
      },
    });
  }, [dispatch]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Content>
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
          <TestComponent />
        </Content>
      </Wrapper>
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
    </>
  );
};

export default App;
