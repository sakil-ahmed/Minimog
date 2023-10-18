import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import {Home} from "./pages";
import AppLayout from "./Components/AppLayout/AppLayout";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1800, offset: 100, disable: "mobile" });
  }, []);
  return (
    <AppLayout>
        <Outlet/>
    </AppLayout>
  );
}

export default App;
