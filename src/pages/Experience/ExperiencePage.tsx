import {ExperiencePageStyled} from "./styled";
import experience from "../../media/experience.gif";
import {LayeredParallaxBackground} from "../../components/public/BachgroundParalax/BackgroundParalax";
import {ExperienceBody} from "./Components/Body/ExperienceBody";

export const ExperiencePage = () => {

    return (
        <ExperiencePageStyled className={"scrl"}>
            <LayeredParallaxBackground
                overlayImageSrc={experience}
                maxOffset={20}
                overlaySize={"cover"}
                overlayWidth={"120%"}
                overlayHeight={"120%"}
                overlayPosition={"center"}
            />
            <ExperienceBody />
        </ExperiencePageStyled>
    )
}