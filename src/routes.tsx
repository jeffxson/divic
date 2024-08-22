import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "./pages/auth/login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="*" element={<NotFound />} /> */}

      <Route path="/" element={<Login />} />
    </Route>
  )
);
