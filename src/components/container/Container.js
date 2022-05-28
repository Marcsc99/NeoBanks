import React from 'react';
import { useSelector } from 'react-redux';
import { StyledContainer } from '../styled-components/StyledContainer';
import { Wrapper } from '../styled-components/Wrapper';
import Conversion from './conversion';
import MonthTransactions from './month-transactions';
import TodayTransactions from './today-transactions';
import WeeklyExpenses from './weekly-expenses';
import TransactionsLastYear from './transactions-last-year';
import { types } from '../../deviceHelper/deviceTypeController';
import MobileNavBar from './mobile-navbar';

const Container = () => {
    const type = useSelector(state => state.deviceType)
    const isMobile = type === types.mobile;
    return (
        <StyledContainer isMobile={isMobile}>
            <Wrapper col width={isMobile ? "100%" : "40%"} height={isMobile ? "72vh" : "82vh"}>
                <Wrapper justify="sb" height="auto">
                    <MonthTransactions />
                    <TodayTransactions />
                </Wrapper>
                <Wrapper height={isMobile ? "60%" : "100%"}>
                    {!isMobile && <Conversion />}
                    {isMobile && <TransactionsLastYear />}
                </Wrapper>
            </Wrapper>
            {!isMobile && (
                <Wrapper width="60%" height="82vh">
                    <WeeklyExpenses />
                </Wrapper>
            )}
            {isMobile && (
                <Wrapper height="5vh" width="100%" mb2 center>
                    <MobileNavBar />
                </Wrapper>
            )}
        </StyledContainer>
    );
}

export default Container;