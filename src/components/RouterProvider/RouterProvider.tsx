import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { App } from "../../App";
import {
  Appraisals,
  Coaching,
  NotFound,
  SalesAndLeasing,
  Training,
} from "../../features";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/appraisals" element={<Appraisals />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/sales-and-leasing" element={<SalesAndLeasing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export const RouterProvider = () => <ReactRouterProvider router={router} />;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
