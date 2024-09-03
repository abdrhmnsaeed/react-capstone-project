import { useState } from "react";
import "./App.css";
import HomePage from "./assets/pages/HomePage";
import RestaurantPage from "./assets/pages/Restaurantpage";
import SignUp from "./assets/pages/Signuppage";
import RegisterUser from "./assets/pages/Registeruser";
import RestauDetails from "./assets/pages/Restaudetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <SignUp /> },
        { path: "restaurantPage", element: <RestaurantPage /> },
        { path: "homePage", element: <HomePage /> },
        { path: "register", element: <RegisterUser /> },
        { path: "Restaurants", element: <RestauDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <HomePage /> */}
      {/* <RestaurantPage /> */}
      {/* <SignUp /> */}
      {/* <RegisterUser /> */}
      {/* <RestauDetails /> */}
    </>
  );
}

export default App;
