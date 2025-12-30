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
        
        .effect {
            opacity: 0;
        }
    }
    &.active.exp {
        overflow: hidden;

        .effect {
            opacity: 0;
        }
        
        a {
            display: inline-block !important;
            filter: unset;
            mix-blend-mode: unset;
        } 
    }
`