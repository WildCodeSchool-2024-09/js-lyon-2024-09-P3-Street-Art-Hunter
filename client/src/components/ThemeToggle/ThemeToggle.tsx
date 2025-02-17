import JetMoon from "../../assets/images/jet-moon.png";
import YellowSun from "../../assets/images/yellow-sun.png";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <img src={JetMoon} alt="" className="icon-theme" />
      ) : (
        <img src={YellowSun} alt="" className="icon-theme" />
      )}
    </button>
  );
}

export default ThemeToggle;
