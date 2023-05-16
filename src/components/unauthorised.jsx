import React, {useContext} from "react";
import {AuthContext} from "../context/auth.context";
import {Navigate} from "react-router-dom";
export default function Unauthorized() {
    const {auth} = useContext(AuthContext)
    return <div>{auth == true
            ? <h5>You do not have admin access</h5>
            : <Navigate to="/signin" replace={true}/>}
    </div>
}
