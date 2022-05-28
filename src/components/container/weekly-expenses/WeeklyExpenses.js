import React from 'react';
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { StyledItem } from '../../styled-components/StyledItem';
import { Wrapper } from '../../styled-components/Wrapper';
import arrowup from "../../../assets/img/arrow-up.png"

ChartJS.register(...registerables);

const WeeklyExpenses = () => {
    const getGradient = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "#2D14C4");
        gradient.addColorStop(1, "#FFFFFF");
        return gradient;
    }
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "hola",
                fill: true,
                radius: 1,
                lineTension: 0.3,
                backgroundColor: getGradient(),
                data: [20, 35, 12, 25, 25, 0, 10]
            },
        ]
    };
    return (
        <StyledItem>
            <Wrapper col height="100%" align justify="se">
                <Wrapper align justify="sb" height="auto">
                    <Wrapper center width="auto" height="auto" ml2>
                        <h2>Weekly expenses</h2>
                    </Wrapper>
                    <StyledItem width="140px" height="30px">
                        <input type="month" style={{ border: "none", width: "90%" }} />
                    </StyledItem>
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
                <Wrapper col height="auto" ml2>
                    <h3>Total Revenue</h3>
                    <h2>$76685.41</h2>
                    <Wrapper>
                        <img src={arrowup} alt="arrow up" width="auto" height="auto" />
                        <h4>7,00%</h4>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </StyledItem>
    );
}

export default WeeklyExpenses;