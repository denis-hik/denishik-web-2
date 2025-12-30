import styled from "styled-components";

export const ProjectsStyled = styled.div`
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
        overflow: hidden;
        border-radius: 4px;
    }
    
    .logos {
        pointer-events: none;
        color: transparent !important;
    }
    
    
    &.active {
        opacity: 1;
    }
    
`