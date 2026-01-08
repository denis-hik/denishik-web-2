import styled from "styled-components";

export const MasonryContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .item-wrapper {
        position: absolute;
        will-change: transform, width, height, opacity;
        padding: 6px;
        cursor: pointer;
        top: 0;
        left: 0;
    }

    .item-wrapper > .item-img {
        position: relative;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 10px;
        border-radius: 10px;
        box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.2);
        
        .label {
            opacity: 0;
            transition: opacity 0.4s;
            position: absolute;
            bottom: 20px;
            left: 20px;

            font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
            "Segoe UI", sans-serif;
            font-size: 16px;
            letter-spacing: 0.18em;
            text-transform: uppercase;

            color: #ffffff;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
        }
        
        &:hover {
            .label {
                opacity: 1;
            }
        }
    }

`