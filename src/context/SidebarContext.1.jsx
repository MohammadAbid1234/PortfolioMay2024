import { createContext } from "react";

export const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});
