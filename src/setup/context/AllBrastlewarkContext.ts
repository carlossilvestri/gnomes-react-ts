
import { createContext } from "react";
import { AllBrastlewark } from '../interfaces/brastlewark-requests.interface';

interface variablesContextSetup {
    allBrastlewark: AllBrastlewark | undefined,
     setBrastlewark: React.Dispatch<React.SetStateAction<AllBrastlewark | undefined>>, 
     loading: boolean, 
     setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

// Crear el Context. Todo Context tiene un Provider
export const AllBrastlewarkContext = createContext<variablesContextSetup>({} as variablesContextSetup);


