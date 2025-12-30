import start from "../../../media/projects.gif";
import {LayeredParallaxBackground} from "../../../Components/public/BachgroundParalax/BackgroundParalax";
import {ProjectsPageStyled} from "./styled";
import {ProjectsPanel} from "./Panel/ProjectsPanel";
import React from "react";

export const ProjectPage = () => {

    return (
        <ProjectsPageStyled>
            <LayeredParallaxBackground
                overlayImageSrc={start}
                maxOffset={20}
                overlaySize={"cover"}
                overlayWidth={"120%"}
                overlayHeight={"120%"}
                overlayPosition={"center"}
            />
            <ProjectsPanel />
        </ProjectsPageStyled>
    )
}