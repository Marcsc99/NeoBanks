import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { StyledItem } from '../../styled-components/StyledItem';
import { Wrapper } from '../../styled-components/Wrapper';
import { StyledLine } from '../../styled-components/StyledLine';
import { types } from '../../../deviceHelper/deviceTypeController';

ChartJS.register(...registerables);

const TransactionsLastYear = () => {
    const type = useSelector(state => state.deviceType)
    const isMobile = type === types.mobile;

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                borderColor: "#6979F8",
                radius: 1,
                lineTension: 0.3,
                data: [20, 15, 12, 25, 32, 5]
            },
        ]
    };
    return (
        <StyledItem shadow={isMobile}>
            <Wrapper col height="100%" align justify="se">
                <Wrapper center width="auto" height="auto" ml2>
                    <h2>Transactions Last Year</h2>
                </Wrapper>
                <Wrapper align justify="sb" width="90%" height="40px" ml1>
                    <Wrapper width="35%" col justify="sb" align pointer>
                        <h5>Monthly</h5>
                        <StyledLine />
                    </Wrapper>
                    <Wrapper width="35%" col justify="sb" align pointer>
                        <h5>Daily </h5>
                    </Wrapper>
                </Wrapper>
                <Wrapper center height="auto">
                    <Line
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                  display: false
                                }
                            }
                        }}
                        data={data}
                    />
                </Wrapper>
            </Wrapper>
        </StyledItem>
    );
}

export default TransactionsLastYear;