import { createContext, useState } from "react";

export const TicketsInputContext = createContext();

export const TicketsInputProvider = ({children}) =>
{
    const initialValue = {name:"",price:"",amount:""};
    const [input, setInput] = useState(initialValue);

    const resetInput = () =>
    {
        setInput(initialValue);
    }

    return (
        <TicketsInputContext.Provider 
        value={{
            input,
            setInput,
            resetInput
        }}>
            {children}
        </TicketsInputContext.Provider>
    )
}