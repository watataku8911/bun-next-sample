"use client";

import { useTheme } from "next-themes";
import Switch from "./Switch";
import Toggle from "./Toggle";
import { useEffect, useState } from "react";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Switch
        darkTheme={theme}
        handleToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Toggle
        darkTheme={theme}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
};

export default Theme;
