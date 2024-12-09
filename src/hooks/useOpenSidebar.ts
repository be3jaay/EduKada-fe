import { useState } from "react";

export function useOpenSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return { isSidebarOpen, ToggleSidebar };
}
