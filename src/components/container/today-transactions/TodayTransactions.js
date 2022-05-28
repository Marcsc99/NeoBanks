import React from 'react';
import { useSelector } from 'react-redux';
import { StyledItem } from '../../styled-components/StyledItem';
import { types } from '../../../deviceHelper/deviceTypeController';

const TodayTransactions = () => {
    const type = useSelector(state => state.deviceType)
    const isMobile = type === types.mobile;
    return (
        <StyledItem shadow={isMobile} widht="50%" height="150px">
            <h1>Transactions</h1>
            <p>3</p>
            <span>TODAY</span>
        </StyledItem>
    );
}

export default TodayTransactions;