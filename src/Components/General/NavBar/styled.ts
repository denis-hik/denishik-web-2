import styled from "styled-components";

export const NavBarStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: 10px;
    min-height: 35px;
    
    &.active:not(.exp) {
        overflow: hidden;
        
        a {
            filter: invert(1);
            mix-blend-mode: difference;
        } 
    }
    &.active.exp {
        overflow: hidden;
        
        a {
            display: inline-block !important;
            filter: unset;
            mix-blend-mode: unset;
        } 
    }
`