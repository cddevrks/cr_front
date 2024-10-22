import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard.js";
import Details from "./pages/Details.js";
import AdminComponents from "./components/Admin/AdminComponents";
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
  const PrivateRoute = ({
    element: Component,
    adminRequired = false,
    ...rest
  }) => {
    if (adminRequired && !isAdmin) {
      return <Navigate to="/" replace />;
    }
    return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/" replace />
    );
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
          element={<Details setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            // <PrivateRoute element={AdminDashboard} adminRequired={true} />
            <AdminDashboard />
          }
        />
        <Route
          path="/admin/upload-task"
          element={
          // <PrivateRoute element={UploadTask} adminRequired={true} />
          <UploadTask/>
        }
        />
        <Route
          path="/admin/review-submissions"
          element={
            // <PrivateRoute element={ReviewSubmissions} adminRequired={true} />
            <ReviewSubmissions/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
