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
    .container {
        display: flex;
        overflow: hidden;
        padding-top: 5vh;
        padding-bottom: 20px;
        width: 100%;
        
        .list {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            width: 100%;
            height: 100%;
            border-radius: 4px;

            overflow: auto;
            padding-left: 10px;
            padding-right: 10px;

            & > div {
                min-height: 290px;
                max-height: 400px;
                
                min-width: 450px;
            }

            .stack {
                position: absolute;
                top: 2vh;
                right: 2vh;

                display: flex;
                gap: 10px;
            }
        }
    }
    
    
    .logos {
        pointer-events: none;
        color: transparent !important;
    }
    
    
    &.active {
        opacity: 1;
    }



    @media (max-width: 767px) {
        .list {
            padding-right: 0;
            padding-left: 0px !important;
            flex-direction: column !important;
            
            & > div {
                min-width: 100px !important;
                
                min-height: 150px;
                max-height: 200px;
            }
        }
    }
    
`