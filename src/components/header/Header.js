import React from 'react';
import { useSelector } from "react-redux"
import { StyledHeader } from '../styled-components/StyledHeader';
import logo from "../../assets/img/logo-neobank.png"
import settings from "../../assets/img/settings.png"
import { types } from "../../deviceHelper/deviceTypeController"

const Header = () => {
    const type = useSelector(state => state.deviceType)
    const isMobile = type === types.mobile;
    return (
        <StyledHeader isMobile={isMobile}>
            <img src={logo} alt="logo" />
            {!isMobile && <img src={settings} alt="settings" />}
        </StyledHeader>
    );
}

export default Header;