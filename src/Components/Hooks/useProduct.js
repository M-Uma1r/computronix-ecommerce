import { useContext } from "react";
import { Data } from "../Context/ProductContext";

const useData = () =>{
    return useContext(Data)
}

export default useData;