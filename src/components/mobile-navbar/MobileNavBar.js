import React from "react";
import { StyledMobileNavBar } from "../styled-components/StyledMobileNavBar";
import graphIcon from "../../assets/img/graphIcon.png";
import compassIcon from "../../assets/img/compass.png";
import userIcon from "../../assets/img/userIcon.png";

const MobileNavBar = () => {
    return (
        <StyledMobileNavBar>
            <img src={graphIcon} alt="graph icon" />
            <img src={compassIcon} alt="compass icon" />
            <img src={userIcon} alt="user icon" />
        </StyledMobileNavBar>
    );
}

export default MobileNavBar;