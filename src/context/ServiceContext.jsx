import { createContext, useState } from "react";

const CurrentServiceContext = createContext({});

export const ServiceContext = ({ children }) => {
    const [currentService, setCurrentService] = useState({
        title:"No service",
        empty:true,
        creation_date:null,
        items:[]
    });

    const [selectedItem, setselectedItem] = useState();

    return (
        <CurrentServiceContext.Provider value={{ currentService, setCurrentService, selectedItem, setselectedItem}}>
            {children}
        </CurrentServiceContext.Provider>
    )
}

export default CurrentServiceContext;