import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import WeeklySales from "./pages/WeeklySales";
import UserManagement from "./pages/UserManagement";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/weekly-sales":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/weekly-sales" element={<WeeklySales />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/login1" element={<Login />} />
    </Routes>
  );
}
export default App;
