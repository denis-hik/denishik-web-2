import styled from "styled-components";

export const ProgrammingStyled = styled.div`
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
        padding-bottom: 10px;
        align-items: center;
        gap: 20px;
        width: calc(100% - 16px);
        height: 100%;
        overflow: hidden;
        border-radius: 4px;
    }
    
    .logos {
        width: 100%;
        color: transparent !important;
    }
    
    
    &.active {
        opacity: 1;
    }


    @media (min-aspect-ratio: 21/9) {
        .list {
            flex-direction: row;
        }
    }
    
`