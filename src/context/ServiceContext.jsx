import { createContext, useState } from "react";

const CurrentServiceContext = createContext({});

export const ServiceContext = ({ children }) => {
    const [currentService, setCurrentService] = useState({
        title:"No service",
        empty:true,
        creation_date:null,
        items:[]
    });

    return (
        <CurrentServiceContext.Provider value={{ currentService, setCurrentService }}>
            {children}
        </CurrentServiceContext.Provider>
    )
}

export default CurrentServiceContext;