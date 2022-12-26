import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SettingsPage from "./Branch/SettingsPage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SettingsPage />}>
      test
      {/* <Route path="contact" element={<Contact />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
          loader={redirectIfUser}
        />
        <Route path="logout" />
      </Route> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
