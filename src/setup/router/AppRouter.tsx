import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, About, Search, Gnomes, Gnome  } from "./pages";
import { Navbar } from "../components/navbar/Navbar";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/gnomes" element={<Gnomes/>} />
          <Route path="gnome/:id" element={<Gnome/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
