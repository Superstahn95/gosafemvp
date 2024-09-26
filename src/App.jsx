import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import RequestService from "./pages/RequestService/RequestService";
import Search from "./pages/Search/Search";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

let heroData = [
  { text1: "We keep riding", text2: "to you" },
  { text1: "We ride to", text2: "keep you going" },
  { text1: "All in one", text2: "Reliable utility" },
];

export default function App() {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    //write setInterval code here
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          heroCount={heroCount}
          heroData={heroData}
          playStatus={playStatus}
          setHeroCount={setHeroCount}
          setPlayStatus={setPlayStatus}
        />
      ),
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/request",
      element: <RequestService />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
