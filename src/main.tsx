import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "./components/RouterProvider/RouterProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider />
);
