import React from "react";
import useDeviceType from "../../common/utils/updateDeviceType"
import { StyledBG } from "../styled-components/StyledBG";
import Header from "../header";
import DashText from "../dash-text";
import Container from "../container";

const Dashboard = () => {
    useDeviceType();

    return (
        <StyledBG>
            <Header />
            <DashText />
            <Container />
        </StyledBG>
    );
}

export default Dashboard;