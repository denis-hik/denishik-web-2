import React from "react";
import {LabelStartPageLabel} from "./styled";
import BlurText from "../../../../components/public/BlurText";
import {useTranslate} from "../../../../hooks/useTranslate";

export const Label: React.FC<{}> = () => {
    const t = useTranslate();

    return (
        <LabelStartPageLabel>
            <BlurText
                text={t("start.tagline")}
                delay={150}
                animateBy="words"
                direction="top"
            />
        </LabelStartPageLabel>
    )
}
