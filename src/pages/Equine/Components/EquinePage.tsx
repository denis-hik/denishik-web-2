import {EquinePageStyled} from "./styled";
import equine from "../../../media/equine.jpg";
import {LayeredParallaxBackground} from "../../../components/public/BachgroundParalax/BackgroundParalax";
import {EquinePanel} from "./Panel/EquinePanel";

export const EquinePage = () => {

    return (
        <EquinePageStyled>
            <LayeredParallaxBackground
                overlayImageSrc={equine}
                maxOffset={20}
                overlaySize={"cover"}
                overlayWidth={"120%"}
                overlayHeight={"120%"}
                overlayPosition={"center"}
            />
            <EquinePanel />
        </EquinePageStyled>
    )
}