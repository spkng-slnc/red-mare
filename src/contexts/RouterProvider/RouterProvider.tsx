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
      <Route path="/about-me" element={<Biography />} />
      <Route path="/appraisals" element={<Appraisals />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route
        path="/sales-and-leasing"
        element={
          <PrivateRoute authId={import.meta.env.DEV_ID}>
            <SalesAndLeasing />
          </PrivateRoute>
        }
      />
      <Route path="/training" element={<Training />} />
      <Route path="/admin" element={<AdminLogin />}>
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute authId={import.meta.env.DEV_ID}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export const RouterProvider = () => <ReactRouterProvider router={router} />;
