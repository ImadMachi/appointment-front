import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ClientCalendar from "./Branch/ClientCalendar";
import CreateAccount from "./Branch/CreateAccount";
import Dashboard from "./Branch/Dashboard";
import Index from "./Branch/Index";
import SettingsPage from "./Branch/SettingsPage";
import ClientPage from "./Client/ClientPage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="dashboard"
        element={
          <>
            <Navbar />
            <Dashboard />
          </>
        }
      />
       
       <Route
        path=""
        element={
          <>
           <Index/>
          </>
        }
      />
        <Route
        path="createaccount"

        element={
      
           <CreateAccount/>
           
          
        }
      />
    
      <Route
        path="settings"
        element={
          <>
            <Navbar />
            <SettingsPage />
          </>
        }
      />


<Route
        path="client"
        element={
          <>
           <ClientPage/>
          </>
        }
      />
      
  {/*
     <Route path="contact" element={<Contact />} />
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
