import styled from "styled-components";

export const ProjectsMoreStyled = styled.div`
    opacity: 0;
    transition: opacity 0.3s;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .list {
        display: flex;
        flex-direction: column;
        padding-top: 5vh;
        padding-bottom: 20px;
        align-items: center;
        gap: 20px;
        width: calc(100% - 16px);
        height: 100%;
        border-radius: 4px;
        
        overflow: auto;

        & > div {
            min-height: 150px;
            max-height: 200px;
        }
        
        .stack {
            position: absolute;
            top: 1vh;
            right: 1vh;
            
            display: flex;
            gap: 10px;
        }
    }
    
    
    .logos {
        pointer-events: none;
        color: transparent !important;
    }
    
    
    &.active {
        opacity: 1;
    }
    
`