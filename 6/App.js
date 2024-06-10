import React, {createContext, useState} from "react";
const clik=createContext();
function clikProvider(children){
    const[count,setcount]=useState(0);
    return(
        <clik.Provider value={{count,setcount}}>
            {children}
        </clik.Provider>
    );
}
export {clik,clikProvider};