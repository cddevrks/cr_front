// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
// import Details from "./pages/Details.js";
// import Dashboard from "./pages/Dashboard.js";
// import Tasks from "./pages/tasks.js"; // Correct the import to match the component name
// import Profile from "./components/Dashboard/Profile.js";
// import Cookies from "js-cookie"; // Import Cookies

// function App() {
//   // Check the authentication status based on the token stored in cookies
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!Cookies.get("accessToken") // Boolean value based on presence of accessToken in cookies
//   );

//   useEffect(() => {
//     const initAOS = async () => {
//       const AOS = (await import("aos")).default;
//       AOS.init({
//         offset: 100,
//         duration: 1000,
//         easing: "ease",
//         once: false,
//         anchorPlacement: "top-bottom",
//       });
//     };

//     initAOS();
//     AOS.refresh();
//   }, []);

//   useEffect(() => {
//     // Listen for any changes in cookies (e.g., token expiration or login/logout)
//     const handleTokenChange = () => {
//       setIsAuthenticated(!!Cookies.get("accessToken"));
//     };

//     window.addEventListener("cookieChange", handleTokenChange);
//     return () => {
//       window.removeEventListener("cookieChange", handleTokenChange);
//     };
//   }, []);

//   // Refactor PrivateRoute to handle children instead of element
//   const PrivateRoute = ({ children }) => {
//     return isAuthenticated ? children : <Navigate to="/" replace />;
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>

//         <Route
//           path="/details"
//           element={
//               <Details />
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute>
//               <Tasks />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard.js";
import Details from "./pages/Details.js";

function App() {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
