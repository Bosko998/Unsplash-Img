import React, { useEffect } from "react";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import ThemeToggle from "./ThemeToggle";
import { useGlobalContext } from "./context";

const App = () => {
  const { isDarkTheme } = useGlobalContext();

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.add("light-theme");
    }
    return () => {
      document.body.classList.remove("dark-theme");
      document.body.classList.remove("light-theme");
    };
  }, [isDarkTheme]);

  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  );
};

export default App;
