import {
    LayeredParallaxBackground,
    TLayeredParallaxBackgroundProps
} from "../../../public/BachgroundParalax/BackgroundParalax";
import SpotlightCard, {SpotlightCardProps} from "../../../public/SpotlightCard/SpotlightCard";
import React from "react";
import {CardStyled} from "./styled";
import BlurText from "../../../public/BlurText";
import { IoMdOpen } from "react-icons/io";

interface CardProps extends SpotlightCardProps {
    image?: string
    imageProps?: Partial<TLayeredParallaxBackgroundProps>
    description?: string
    icon?: string
    onClick?: () => void
    isBlank?: boolean
}

export const Card = ({image, imageProps, description, icon, onClick, isBlank, ...props}: CardProps) => {


    return (<CardStyled onClick={onClick}>
        <SpotlightCard
            className={"card"}
            spotlightColor={"#cdcdcd"}
            backgroundColor={"#fff"}
            borderColor={"#cdcdcd"}
            {...props}
        >
            {image && <LayeredParallaxBackground
                overlayImageSrc={image}
                maxOffset={20}
                overlayOpacity={1}
                overlaySize={"cover"}
                overlayWidth={"120%"}
                overlayHeight={"120%"}
                overlayPosition={"center"}
                {...imageProps}
            />}
            {!!description?.length && <div className={"text"}>
                <BlurText
                    text={description}
                    delay={150}
                    animateBy="letters"
                    direction="bottom"
                />
                {/*@ts-ignore*/}
                {isBlank && <IoMdOpen color={"#fff"} />}
            </div>}
            {icon && <div className={"icon"}>
                {icon}
            </div>}
        </SpotlightCard>
    </CardStyled>)
}