import { AllBrastlewark } from "../interfaces/brastlewark-requests.interface";
import { useState, useEffect } from "react";
import { AllBrastlewarkContext } from "./AllBrastlewarkContext";
import api from "../../shared/api/api";

interface AllBrastlewarkProps {
  children: JSX.Element | JSX.Element[];
}

// Crear el Provider. El Provider es donde se encontran las funciones y state.

export const AllBrastlewarkProvider = ({ children }: AllBrastlewarkProps) => {
  // Crear el state del context.
  const [allBrastlewark, setBrastlewark] = useState<AllBrastlewark>();
  const [loading, setLoading] = useState<boolean>(false);
  // Ejecutar el llamado a la API.
  useEffect(() => {
    const getGnomes = async () => {
      const resp = await api.get<AllBrastlewark>("");
      setBrastlewark(resp.data);
      console.log("resp ", resp.data);
    };
    getGnomes();
  }, []);
  return (
      <AllBrastlewarkContext.Provider value={{allBrastlewark, setBrastlewark, loading, setLoading}}>
        {children}
      </AllBrastlewarkContext.Provider>
  );
};
