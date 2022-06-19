import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Router } from "./router";
import { globalStyles } from "./styles/globalStyles";
import { darkTheme, theme } from "./styles/theme";
import { useMemo, useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useMemo(() => {
    const storageTheme = localStorage.getItem("app-theme") === "true";
    setIsDarkTheme(storageTheme);
  }, []);

  globalStyles();

  const handleThemeChange = (isDark: boolean) => {
    localStorage.setItem("app-theme", `${isDark}`);
    setIsDarkTheme(isDark);
  };

  return (
    <div className={isDarkTheme ? darkTheme : theme}>
      <Header onThemeChange={handleThemeChange} isDarkTheme={isDarkTheme} />
      <Content>
        <Router />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
