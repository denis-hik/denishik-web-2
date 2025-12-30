import start from "../../../media/start2.jpg";
import {LayeredParallaxBackground} from "../../../Components/public/BachgroundParalax/BackgroundParalax";
import {StartPageStyled} from "./styled";
import {useCallback, useState} from "react";
import {Motion} from "./Motion/Motion";
import {Label} from "./Label/LabelStartPage";

export const StartPage = () => {
    const [requestMotion, setRequestMotion] = useState<null | (() => Promise<boolean>)>(null);

    const handleMotion = useCallback(async () => {
        if (requestMotion) {
            const ok = await requestMotion();
            if (!ok) {
                alert("Motion failed.");
            }
            setRequestMotion(null);
        }
    }, [requestMotion])

    return (
        <StartPageStyled>
            <LayeredParallaxBackground
                overlayImageSrc={start}
                maxOffset={20}
                overlaySize={"cover"}
                overlayWidth={"120%"}
                overlayHeight={"120%"}
                overlayPosition={"left"}
                onRequestGyroPermission={(e) => setRequestMotion(() => e)}
            />
            {!!requestMotion && <Motion onClick={handleMotion}/>}
            <Label />
        </StartPageStyled>
    )
}