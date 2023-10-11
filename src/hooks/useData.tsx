import { useContext } from "react";
import { DataContext } from "../context/Context";

const useData = () => {

    const dataContext = useContext(DataContext);

    return dataContext;
}

export default useData;
