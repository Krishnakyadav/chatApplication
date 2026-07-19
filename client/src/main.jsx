import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./pages/Home/Routing";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/store.js";
import {Provider} from "react-redux"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={routes} />
  </Provider>,
);
