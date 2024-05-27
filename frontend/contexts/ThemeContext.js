"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  userPreferences: {
    theme: "light",
    fontSize: "medium",
    reduceAnimations: false,
  },
};

export const ThemeContext = createContext({
  state: initialState,
  dispatch: () => {},
});

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          theme: state.userPreferences.theme === "dark" ? "light" : "dark",
        },
      };

    case "UPDATE_PREFERENCES":
      console.log("Updating preferences...");
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload,
        },
      };

    case "CHANGE_FONT_SIZE":
      console.log("Updating fontsize...");
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          fontSize: action.payload,
        },
      };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    console.log("Theme changed: ", state.userPreferences.theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(state.userPreferences.theme);
  }, [state.userPreferences.theme]);

  useEffect(() => {
    console.log("Fetching saved theme...");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: "SET_THEME", payload: savedTheme });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  console.log("Using theme...");
  if (useContext(ThemeContext) === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useContext(ThemeContext);
}
