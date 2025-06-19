"use client";

import { useTheme } from "next-themes";
import Switch from "./Switch";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  if (theme === undefined) return null;

  return (
    <Switch
      darkTheme={theme}
      handleToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};

export default Theme;
