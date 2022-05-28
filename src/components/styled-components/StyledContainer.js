import styled from 'styled-components';

export const StyledContainer = styled.div`
width: 100%;
height:100%;
background: ${props => props.isMobile ? "#F2F6F9" : "#FFFFFF"};
display: flex;
`