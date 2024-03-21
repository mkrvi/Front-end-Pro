import React, {useContext} from "react";
import {AppContext} from "../context/Context";
import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import Conclusion from "./Conclusion";
import Avatar from "./Avatar";

function FormWrapper(){
    const [state] = useContext(AppContext)
    switch (state.step) {
        case 1:
            return <PersonalInfo/>;
        case 2:
            return <Password/>;
        case 3:
            return <Avatar/>
        default:
            return <Conclusion/>
    }
}
export default FormWrapper