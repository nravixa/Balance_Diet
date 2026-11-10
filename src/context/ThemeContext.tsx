"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  useCallback,
} from "react";

export type ThemeMode = "dark" | "light";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDOM(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (mode === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("balance-theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("balance-theme-change", callback);
  };
}

function getSnapshot(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("balance_diet_theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Fallback
  }
  return "dark";
}

function getServerSnapshot(): ThemeMode {
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const setTheme = useCallback((mode: ThemeMode) => {
    try {
      localStorage.setItem("balance_diet_theme", mode);
    } catch {
      // Ignored
    }
    applyThemeToDOM(mode);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("balance-theme-change"));
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getSnapshot();
    const next: ThemeMode = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("balance_diet_theme", next);
    } catch {
      // Ignored
    }
    applyThemeToDOM(next);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("balance-theme-change"));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
