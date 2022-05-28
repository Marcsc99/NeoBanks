import styled from "styled-components"


export const StyledMiniCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.color};
`;