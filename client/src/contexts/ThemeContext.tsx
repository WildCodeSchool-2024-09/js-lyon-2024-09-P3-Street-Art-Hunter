import { type ReactNode, createContext, useContext, useState, useEffect } from "react";

// Définition des types de thèmes possibles : "light" ou "dark"
type Theme = "light" | "dark";

// Interface définissant la structure du contexte de thème
// Il contient le thème actuel et une fonction pour le changer
interface ThemeContextType {
  theme: Theme;              // Le thème actuel ("light" ou "dark")
  toggleTheme: () => void;   // Fonction pour basculer entre les thèmes
}

// Création du contexte avec une valeur initiale undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Composant Provider qui va envelopper notre application
// Il fournit le thème et la fonction toggleTheme à tous les composants enfants
export function ThemeProvider({ children }: { children: ReactNode }) {
  // État local pour stocker le thème actuel, initialisé à "light"
  const [theme, setTheme] = useState<Theme>("light");

  // Fonction pour basculer entre les thèmes
  // Si le thème actuel est "light", on passe à "dark" et vice-versa
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // Effect qui s'exécute chaque fois que le thème change
  useEffect(() => {
    // On récupère l'élément racine de notre application (#root)
    const root = document.getElementById('root');
    // Si l'élément existe, on met à jour ses classes CSS
    if (root) {
      // On applique les classes 'theme' et le thème actuel (light/dark)
      // Ces classes sont utilisées dans notre CSS pour styler l'application
      root.className = `theme ${theme}`;
    }
  }, [theme]); // L'effect se déclenche quand 'theme' change

  // Le Provider enveloppe les composants enfants et leur fournit
  // l'accès au thème et à la fonction toggleTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour utiliser le thème dans nos composants
export function useTheme() {
  // On récupère le contexte
  const context = useContext(ThemeContext);
  
  // Si le contexte n'existe pas, cela signifie que le composant
  // n'est pas enveloppé par ThemeProvider
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  // On retourne le contexte (theme et toggleTheme)
  return context;
}
