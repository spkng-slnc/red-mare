import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { Layout } from "../../Layout";
import {
  Appraisals,
  Coaching,
  Home,
  NotFound,
  SalesAndLeasing,
  Training,
} from "../../features";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/appraisals" element={<Appraisals />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/sales-and-leasing" element={<SalesAndLeasing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export const RouterProvider = () => <ReactRouterProvider router={router} />;
