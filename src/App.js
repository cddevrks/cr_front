import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard.js";
import Details from "./pages/Details.js";
import AdminComponents from "./components/Admin/AdminComponents";
import AdminSignIn from "./components/Admin/AdminSignIn.js";
const { AdminDashboard, UploadTask, ReviewSubmissions } = AdminComponents;

function App() {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
    AOS.refresh();
  }, []);

  // PrivateRoute component to protect the dashboard
  const PrivateRoute = ({ element: Component, ...rest }) => {
    return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/" replace />
    );
  };
  // PrivateRoute component to protect the dashboard
  const AdminRoute = ({ element: Component, ...rest }) => {
    return isAdmin ? <Component {...rest} /> : <Navigate to="/" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* Private Route: Only accessible when authenticated */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={Dashboard}
              isAuthenticated={isAuthenticated}
            />
          }
        />

        {/* Other routes like Details */}
        <Route
          path="/details"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Details setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            // <PrivateRoute element={AdminDashboard} />
            <AdminSignIn setIsAdmin={setIsAdmin} />
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute element={AdminDashboard} />
            // <AdminDashboard />
          }
        />
        <Route
          path="/admin/upload-task"
          element={
            <AdminRoute element={UploadTask} />
            // <UploadTask/>
          }
        />
        <Route
          path="/admin/review-submissions"
          element={
            <AdminRoute element={ReviewSubmissions} />
            // <ReviewSubmissions/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
