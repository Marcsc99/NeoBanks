import React from 'react';
import { StyledItem } from '../../styled-components/StyledItem';
import { StyledMiniCircle } from '../../styled-components/StyledMiniCircle';
import dots from "../../../assets/img/icon.png"
import { StyledInfo } from '../../styled-components/StyledInfo';
import { Wrapper } from '../../styled-components/Wrapper';
import { StyledProgressCircle } from '../../styled-components/StyledProgressCircle';

const Conversion = () => {
    return (
        <StyledItem>
            <Wrapper col height="50vh" align justify="sb">
                <Wrapper align justify="sa" height="auto">
                    <h2>Conversion</h2>
                    <StyledItem width="32px" height="32px">
                        <img src={dots} alt="dots" />
                    </StyledItem>
                </Wrapper>
                <Wrapper width="25vw" height="25vw" maxWidth="350px" maxHeight="350px" center>
                    <StyledProgressCircle phones={10} screens={20} pcs={2} max={42} />
                </Wrapper>
                <StyledInfo>
                    <Wrapper justify="se">
                        <StyledMiniCircle color="#007AFF" />
                        <span>Screens</span>
                    </Wrapper>
                    <Wrapper justify="se">
                        <StyledMiniCircle color="#FB8832" />
                        <span>PCs</span>
                    </Wrapper>
                    <Wrapper justify="se">
                        <StyledMiniCircle color="#9B51E0" />
                        <span>Phones</span>
                    </Wrapper>
                </StyledInfo>
            </Wrapper>
        </StyledItem>
    );
}

export default Conversion;