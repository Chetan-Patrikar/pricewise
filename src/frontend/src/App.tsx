import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { router } from "./router";

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="pricewise-theme"
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
