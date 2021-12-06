import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Navbar } from "../components";
import { routes } from "./routes";
import { AllBrastlewarkProvider } from "../context/AllBrastlewarkProvider";

export const AppRouter = () => {
  return (
    <>
      <AllBrastlewarkProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
            {/* <Route path="gnome/:id" element={<Gnome/>} /> */}
            {/* <Route key="default" path="/*" element={<Home/>} /> */}
          </Routes>
        </BrowserRouter>
      </AllBrastlewarkProvider>
    </>
  );
};
