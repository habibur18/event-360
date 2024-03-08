import { Navigate, createBrowserRouter } from "react-router-dom";
import EventItemsManagement from "../App/admin/EventItemsManagement";
import RecentEventsManagement from "../App/admin/RecentEventsManagement";
import Home from "../App/landingPage/Home/Home";
import MainLayout from "../Layout/PageLayout/MainLayout";
import AdminLayout from "../Layout/adminLayout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,

    children: [
      {
        index: true,
        element: <Navigate to="manage-event-items" />,
      },
      {
        path: "/admin/manage-event-items",
        element: <EventItemsManagement />,
      },
      {
        path: "/admin/manage-events",
        element: <RecentEventsManagement />,
      },
    ],
  },
]);
export default router;
