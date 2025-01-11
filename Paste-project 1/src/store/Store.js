import {configureStore} from "@reduxjs/toolkit"
import Paste from "./PasteSlice"
export const store=configureStore(
    {
        reducer:{
            paste:Paste
        }
    }
    
)
