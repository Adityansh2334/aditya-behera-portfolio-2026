import { createContext, useContext, useState, ReactNode } from "react";

type UIContextType = {
    isModalOpen: boolean;
    setModalOpen: (value: boolean) => void;
};

const UIContext = createContext<UIContextType>({
    isModalOpen: false,
    setModalOpen: () => {},
});

export const UIProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <UIContext.Provider value={{ isModalOpen, setModalOpen }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);
