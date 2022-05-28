import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDashText } from '../styled-components/StyledDashText';
import { Wrapper } from '../styled-components/Wrapper';

import { types } from '../../deviceHelper/deviceTypeController';

const DashText = () => {
    const type = useSelector(state => state.deviceType)
    const isMobile = type === types.mobile;

    return (
        <StyledDashText>
            {!isMobile && (<p>Dashboard</p>)}
            {isMobile && (
                <Wrapper col height="auto">
                    <h1>Transactions history</h1>
                    <span>These are your monthly and daily actions</span>
                </Wrapper>
            )}
        </StyledDashText>
    );
}

export default DashText;