import React from 'react';
import { useSelector } from 'react-redux';
import { StyledItem } from '../../styled-components/StyledItem';
import { types } from '../../../deviceHelper/deviceTypeController';

const MonthTransactions = () => {
    const type = useSelector(state => state.deviceType)
    const isMobile = type === types.mobile;

    return (
        <StyledItem shadow={isMobile} widht="100%" height="150px">
            <h1>Transactions</h1>
            <p>35</p>
            <span>LAST MONTH</span>
        </StyledItem>
    );
}

export default MonthTransactions;