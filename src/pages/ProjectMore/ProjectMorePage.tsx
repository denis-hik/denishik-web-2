import {LayeredParallaxBackground} from "../../components/public/BachgroundParalax/BackgroundParalax";
import React from "react";
import {ProjectsMorePageStyled} from "./styled";
import img from "../../media/projectsMore.gif"
import {ProjectsMorePanel} from "./Components/Panel/ProjectMorePanel";

export const ProjectMorePage = () => {

    return (<ProjectsMorePageStyled>
        <LayeredParallaxBackground
            overlayImageSrc={img}
            maxOffset={20}
            overlaySize={"cover"}
            overlayWidth={"120%"}
            overlayHeight={"120%"}
            overlayPosition={"center"}
        />
        <ProjectsMorePanel />
    </ProjectsMorePageStyled>)
}