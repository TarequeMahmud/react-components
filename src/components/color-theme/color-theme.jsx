import "./styles.css";
import useLocalStorage from "./useLocalStorage";
export default function ColorMode() {
  const [theme, setTheme] = useLocalStorage("dark");

  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
