import { Outlet } from "react-router-dom";
import Footer from "../../App/landingPage/Shared/Footer";
import Navbar from "../../App/landingPage/Shared/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
