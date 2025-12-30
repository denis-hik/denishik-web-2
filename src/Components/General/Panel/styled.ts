import styled from "styled-components";

export const PanelStyled = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: 0;
    top: unset;
    height: 60px;
    align-items: center;
    transition: all 0.3s ease-in-out;
    
    .glass-surface {
        min-width: 500px;
        transition: all 0.3s ease-in-out;
        width: 30% !important;
        height: 45px !important;
    }
    
    &.active {
        bottom: unset;
        top: 90vh;
        height: 100%;
        
        .glass-surface {
            width: 95% !important;
            height: 90% !important;
        }
    }
    
    width: 100%;

    @media (min-aspect-ratio: 21/9) {
        &.active {
            top: 93vh;
            height: 50%;
        }
        .list {
            flex-direction: row;
        }
    }
    
    @media (max-width: 767px) {
        .glass-surface {
            min-width: unset;
            transition: all 0.3s ease-in-out;
            width: 90% !important;
            height: 45px !important;
        }
    }
`