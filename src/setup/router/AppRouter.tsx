import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, About, Search  } from "./pages";
import { Navbar } from "../components/navbar/Navbar";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/*" element={<h2>Hola1</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
