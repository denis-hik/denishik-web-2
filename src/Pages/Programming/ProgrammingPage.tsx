import {ProgrammingPageStyled} from "./styled";
import programming from "../../media/programming2k.gif";
import {LayeredParallaxBackground} from "../../Components/public/BachgroundParalax/BackgroundParalax";
import {ProgrammingPanel} from "./Components/Panel/ProgrammingPanel";

export const ProgrammingPage = () => {

    return (
        <ProgrammingPageStyled>
            <LayeredParallaxBackground
                overlayImageSrc={programming}
                maxOffset={20}
                overlaySize={"cover"}
                overlayWidth={"120%"}
                overlayHeight={"120%"}
                overlayPosition={"center"}
            />
            <ProgrammingPanel />
        </ProgrammingPageStyled>
    )
}