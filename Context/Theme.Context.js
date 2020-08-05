import React from "react";
export const ThemeColors = {
  Dark: {
    "--color-Box": "#252b43",
    "--color-Text": "#8A92B7",
    "--color-BoxHover": "#333a56",
    "--color-SMediaBoxFollowersCount": "white",
    "--color-SMediaTitle": "#20222f",
    "--color-Title": "white",
    "--color-Toggleswitcher": "#333a55",
    "--color-Container": "#1d2029",
    "--color-ToggleText": "white",
    "--color-ToggleBox": "#3fd08f",
    "--translate-toggleSwitcher": "translateX(0%)"
  },
  Light: {
    "--color-Box": "#F0F3FA",
    "--color-Text": "#9B9EA7",
    "--color-BoxHover": "#E1E3F0",
    "--color-SMediaBoxFollowersCount": "black",
    "--color-SMediaTitle": "#F8F9FE",
    "--color-Title": "black",
    "--color-Toggleswitcher": "#F3F2FA",
    "--color-Container": "#FFFFFF",
    "--color-ToggleText": "black",
    "--color-ToggleBox": "#AEB2CD",
    "--translate-toggleSwitcher": "translateX(95%)"
  }
};
export const ThemeContext = React.createContext({ DarkMode: "Dark" });
