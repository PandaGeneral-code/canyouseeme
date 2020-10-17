import React, { createContext, useMemo, useReducer } from "react";

export const AppContext = createContext();

export const SET_VISIBLE_AREA = "app/SET_VISIBLE_AREA";

const initialState = { visibleArea: { bottom: null, top: null } };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_AREA:
      return { ...state, visibleArea: action.visibleArea };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [memDispatch, memState] = useMemo(() => [dispatch, state], [
    dispatch,
    state,
  ]);

  return (
    <AppContext.Provider value={{ dispatch: memDispatch, state: memState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
