import { ThemeProvider } from "styled-components";
import light from "./assets/styles/themes/light";
import dark from "./assets/styles/themes/light";
import { useState } from "react";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "./assets/styles/reset";
import Error from "./components/Error/error";
import Home from "./components/home/home";
import ProfileDiv from "./components/profileDiv/profileDiv";

export default function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <BrowserRouter>
      <Reset/>
      <ThemeProvider theme={light}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfileDiv />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
