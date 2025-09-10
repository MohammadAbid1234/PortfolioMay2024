import { useReducer } from "react";
import reducer from "../functions/sidebarReducer";
import PropTypes from "prop-types";
import { SidebarContext } from "./SidebarContext.1";

const initialState = {
  isSidebarOpen: false,
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  return (
    <SidebarContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
