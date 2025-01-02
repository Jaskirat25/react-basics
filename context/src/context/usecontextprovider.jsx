import  MyContext  from "./usecontext";
import React from "react";

 export const UserContextProvider=({children})=>{
    const [user,setuser]=React.useState(null);

    return(
        <MyContext.Provider value={{user,setuser}}>
{children}
</MyContext.Provider>
        )

}