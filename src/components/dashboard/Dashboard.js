import React from "react";
import { useSelector } from "react-redux";
import useDeviceType from "../../common/utils/updateDeviceType"
import { StyledBG } from "../styled-components/StyledBG";
import Header from "../header";
import DashText from "../dash-text";
import Container from "../container";
import MobileNavBar from "../container/mobile-navbar";
import { types } from "../../deviceHelper/deviceTypeController";

const Dashboard = () => {
    useDeviceType();
    const type = useSelector(state => state.deviceType);
    const isMobile = type === types.mobile;

    return (
        <StyledBG>
            <Header />
            <DashText />
            <Container />
            {isMobile && <MobileNavBar />}
        </StyledBG>
    );
}

export default Dashboard;