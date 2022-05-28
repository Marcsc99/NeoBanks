import styled from "styled-components"

export const StyledProgressCircle = styled.div`
    position:absolute;
    background: conic-gradient( 
        #9013FE 0.00% ${props => ((props.phones / props.max) * 100)}%, 
        #007AFF ${props => ((props.phones / props.max) * 100)}% ${props => (((props.screens + props.phones) / props.max) * 100)}%, 
        #FB8832 ${props => (((props.screens + props.phones) / props.max) * 100)}% ${props => (((props.pcs + props.screens + props.phones) / props.max) * 100)}%, 
        #E6E5E6 ${props => (((props.pcs + props.screens + props.phones) / props.max) * 100)}% 100%
    );
    border-radius: 50%;
    width: 100%;
    height: 100%;
    z-index: 2;
`