import styled, {css} from 'styled-components';

export const StyledItem = styled.div`
    
    box-sizing: border-box;
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    margin: 2vh 1vw 2vh 1vw;

    ${props => {
            if (props.shadow) return css`
            filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08)) drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));
            `
        }
        }
    }

    font-family: 'Montserrat';
    font-style: normal;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #FFFFFF;

    h1 {
        margin:0;
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
        color: #171725;
    }

    p {
        margin:0;
        font-weight: 500;
        font-size: 48px;
        line-height: 60px;
        color: #6979F8;
    }

    span {
        margin:0;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #999999;
    }
    h2 {
        margin:0;
        font-weight: 700;
        font-size: 24px;
        line-height: 132%;
        color: #333333;
    }
    h3{
        margin:0;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #9C9C9C;
    }
    h4{
        margin:0;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #4AAF05;
    }
    h5 {
        margin:0;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #6979F8;
    }
`