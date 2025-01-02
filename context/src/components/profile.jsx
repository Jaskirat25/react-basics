import React ,{useContext} from "react";
import usecontext from "../context/usecontext";

const Profile=()=>{
    const {user}=useContext(usecontext)

  
        if(!user)return <div>please login</div>
      return  <div>welcome {user.username}</div>
    
}
export default Profile