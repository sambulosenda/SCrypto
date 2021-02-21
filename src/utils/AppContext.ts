import { navItem } from "aws-amplify";
import React from "react";

export default React.createContext({
    userId: null, 
    setUserId: (id: String) => {}
})