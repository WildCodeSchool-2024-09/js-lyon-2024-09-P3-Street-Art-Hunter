import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Définition des types de thèmes possibles : "light" ou "dark"
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Création du contexte avec une valeur initiale undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Récupérer le thème initial depuis localStorage ou utiliser "dark" par défaut
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "dark";
  });

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "dark" ? "light" : "dark";
      // Sauvegarder le nouveau thème dans localStorage
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.className = `theme ${theme}`;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
