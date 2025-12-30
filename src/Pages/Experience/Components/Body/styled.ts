import styled from "styled-components";

export const ExperienceBodyStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    
    .list {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        
        
        .item {
            width: 100% !important;
            height: 80px !important;
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            
            img {
                flex: 1 1 100px;
                width: 100px;
                height: 100px;
                object-fit: contain;
            }
            
            .content {
                transition: all 0.3s ease-in-out;
                width: 0;
                padding: 0;

                flex: 0 1 0;
                opacity: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: end;
                
                p {
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                
                .label {
                    margin-bottom: 0.5rem;
                    margin-top: 0.5rem;
                    width: fit-content;
                    color: black;

                    background-color: rgba(255, 255, 255, 0);
                    border-radius: 15px;
                    padding: 8px 16px;
                    
                    justify-content: right;
                    transition: background-color 1s ease-in-out;
                    
                    font: 600 22px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
                    letter-spacing: 0.4px;
                    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);
                }
                .position, .date {
                    justify-content: right;

                    margin: 0;
                    color: white;
                }

                .date {
                    margin-top: 10px;
                }
            }
            
            &.active {
                height: 120px !important;
                
                .content {
                    flex: 1 1 100px;
                    opacity: 1;
                    width: unset;
                    padding-right: 10px;
                    
                    .label {
                        background-color: rgba(255, 255, 255, 0.92);
                    }
                    
                    p {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        top: unset;
        bottom: 10vh;
        
        .list {
            .item {
                .content {
                    height: 0;
                    
                    align-items: center;
                    
                    .position, .date {
                        justify-content: center !important;
                    }
                    
                    p {
                        transition: unset;
                    }
                }
                
                & > div {
                    flex-direction: column;
                }
                
                
                &.active {
                    height: 20vh !important;
                }
            }
        }
    }
`