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
    const [mainDisplayText, setMainDisplayText] = useState("")
    const [stageDisplayText, setStageDisplayText] = useState("")
    const [selectedVerse, setSelectedVerse] = useState(0)

    return (
        <CurrentServiceContext.Provider value={{ currentService, setCurrentService, selectedItem, setselectedItem,
            mainDisplayText, setMainDisplayText, stageDisplayText, setStageDisplayText, selectedVerse, setSelectedVerse}}>
            {children}
        </CurrentServiceContext.Provider>
    )
}

export default CurrentServiceContext;