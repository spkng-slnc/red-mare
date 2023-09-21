import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

import {
  AdminDashboard,
  AdminLogin,
  Appraisals,
  Biography,
  Coaching,
  Home,
  NotFound,
  SalesAndLeasing,
  Training,
} from "../../features";
import { Layout } from "../../Layout";

import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Biography />} />
      <Route path="/appraisals" element={<Appraisals />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/sales-and-leasing" element={<SalesAndLeasing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/admin" element={<AdminLogin />}>
        <PrivateRoute
          path="/admin"
          element={<AdminDashboard />}
          authId={process.env.ADMIN_AUTH_ID!}
        />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export const RouterProvider = () => <ReactRouterProvider router={router} />;
