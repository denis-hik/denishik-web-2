import {LayeredParallaxBackground} from "../../components/public/BachgroundParalax/BackgroundParalax";
import React from "react";
import {ProjectsMorePageStyled} from "./styled";
import {ProjectsMorePanel} from "./Components/Panel/ProjectMorePanel";

export const ProjectMorePage = () => {

    return (<ProjectsMorePageStyled>
        <LayeredParallaxBackground
            overlayImageSrc={"https://github.com/denis-hik/SC-Android/blob/master/screens/photo0.jpg?raw=true"}
            maxOffset={20}
            overlaySize={"cover"}
            overlayWidth={"120%"}
            overlayHeight={"120%"}
            overlayPosition={"center"}
        />
        <ProjectsMorePanel />
    </ProjectsMorePageStyled>)
}