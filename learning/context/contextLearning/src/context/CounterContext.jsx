import { createContext,useContext,useState } from "react";

export const CounterContext = createContext(null);
export const useCounter = ()=>{
    const counter = useContext(CounterContext);
    return counter;
}
export const CounterProvider = (props)=>{
    const[count,setCount] = useState(0);
    return(
        <CounterContext.Provider value={{count,setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}
