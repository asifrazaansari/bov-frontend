import { useContext } from "react";
import TabContext from "../context/TabContext";


const useTabState = () => {
    const context = useContext(TabContext)

    if(!context){
        throw new Error('useTabState must be used within a TabProvider')
    }

    return context
}


export default useTabState;