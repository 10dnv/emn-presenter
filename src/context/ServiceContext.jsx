import { createContext, useState } from "react";

const CurrentServiceContext = createContext({});

export const ServiceContext = ({ children }) => {
    const [currentService, setCurrentService] = useState({});

    return (
        <CurrentServiceContext.Provider value={{ currentService, setCurrentService }}>
            {children}
        </CurrentServiceContext.Provider>
    )
}

export default CurrentServiceContext;