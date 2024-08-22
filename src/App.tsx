import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import React from "react";
function App() {
  localStorage.setItem("chakra-ui-color-mode", "light");

  return <RouterProvider router={router} />;
}

export default App;
