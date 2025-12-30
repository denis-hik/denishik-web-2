import React from "react";
import {LabelStartPageLabel} from "./styled";
import BlurText from "../../../../Components/public/BlurText";

export const Label: React.FC<{}> = () => {

    return (
        <LabelStartPageLabel>
            <BlurText
                text={"Ideas. Motion. Progress."}
                delay={150}
                animateBy="words"
                direction="top"
            />
        </LabelStartPageLabel>
    )
}