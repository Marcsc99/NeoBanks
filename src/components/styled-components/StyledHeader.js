import styled from "styled-components"

export const StyledHeader = styled.div`
    width: 96%;
    height: 10%;
    background-color: ${props => (props.isMobile ? "#F2F6F9" : "#FFFFFF")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2% 0 2%;
`