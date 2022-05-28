import styled, { css } from "styled-components"

export const Wrapper = styled.div.attrs(props => (
    {
        width: props.width || "100%",
        height: props.height || "100%",
        bg: props.bg || "none",
        color: props.color || "#000000",
        border: props.border || "none"
    }))`
    position:relative;
    box-sizing: border-box;
    width: ${props => props.width};
    height: ${props => props.height};
    display:flex;
    ${props => {
        if (props.maxWidth) return css` max-width: ${props.maxWidth}; ` }
    }
    ${props => {
        if (props.maxHeight) return css` max-height: ${props.maxHeight}; ` }
    }


    ${props => {
        if (props.center) return css`
            justify-content: center;
            align-items: center;
            `
        }
    }

    ${props => {
        if (props.of) return css`
            overflow:auto; 
            overflow-x: hidden;
            
            scrollbar-width: thin; 
            scrollbar-color: red transparent;
          
          
            &::-webkit-scrollbar {
                width: 2px;
                height: 2px;
            }
            
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            
            &::-webkit-scrollbar-thumb {
                background: transparent;
                border-radius: 1px;
                border: 2px solid grey;
            }
            `
        }
    }
    
    ${props => {
        if (props.justify) {
            switch (props.justify) {
                case "left": return css`justify-content: flex-start`
                case "center": return css`justify-content: center`
                case "right": return css`justify-content: flex-end`
                case "sb": return css`justify-content: space-between`
                case "sa": return css`justify-content: space-around`
                case "se": return css`justify-content: space-evenly`
                default: return css`justify-content: center`;
            }
        }
    }};
    ${props => {
        if (props.align) {
            switch (props.align) {
                case "top": return css`align-items: flex-start`
                case "center": return css`align-items: center`
                case "bottom": return css`align-items: flex-end`
                case "sb": return css`align-items: space-between`
                case "sa": return css`align-items: space-around`
                case "se": return css`align-items: space-evenly`
                default: return css`align-items: center`;
            }
        }
    }};
    ${props => {
        if (props.col) return css`flex-direction:column`
        if (props.colR) return css`flex-direction:column-reverse`
        if (props.rowR) return css`flex-direction:row-reverse`
    }};
    ${props => {
        if (props.pointer) return css`cursor: pointer`
    }};
    background-color: ${props => props.bg};
    color: ${props => props.color};
    margin: ${props => {
        let top = "0";
        let right = "0";
        let bot = "0";
        let left = "0";
        if (props.margin) { top = "1vh"; right = "1vw"; bot = "1vh"; left = "1vw"; }
        if (props.marginBig) { top = "2vh"; right = "2vw"; bot = "2vh"; left = "2vw"; }
        if (props.marginBigger) { top = "4vh"; right = "4vw"; bot = "4vh"; left = "4vw"; }

        if (props.ml1) left = "1vw";
        if (props.ml2) left = "2vw";
        if (props.ml3) left = "4vw";

        if (props.mr1) right = "1vw";
        if (props.mr2) right = "2vw";
        if (props.mr3) right = "4vw";

        if (props.mt1) top = "1vh";
        if (props.mt2) top = "2vh";
        if (props.mt3) top = "4vh";

        if (props.mb1) bot = "1vh";
        if (props.mb2) bot = "2vh";
        if (props.mb3) bot = "4vh";

        return `${top} ${right} ${bot} ${left}`;
    }};
    padding: ${props => {
        let top = "0";
        let right = "0";
        let bot = "0";
        let left = "0";
        if (props.padding) { top = "1vh"; right = "1vw"; bot = "1vh"; left = "1vw"; }
        if (props.paddingBig) { top = "2vh"; right = "2vw"; bot = "2vh"; left = "2vw"; }
        if (props.paddingBigger) { top = "4vh"; right = "4vw"; bot = "4vh"; left = "4vw"; }

        if (props.pl1) left = "1vw";
        if (props.pl2) left = "2vw";
        if (props.pl3) left = "4vw";

        if (props.pr1) right = "1vw";
        if (props.pr2) right = "2vw";
        if (props.pr3) right = "4vw";

        if (props.pt1) top = "1vh";
        if (props.pt2) top = "2vh";
        if (props.pt3) top = "4vh";

        if (props.pb1) bot = "1vh";
        if (props.pb2) bot = "2vh";
        if (props.pb3) bot = "4vh";

        return `${top} ${right} ${bot} ${left}`;
    }};
    border: ${props => props.border};
`