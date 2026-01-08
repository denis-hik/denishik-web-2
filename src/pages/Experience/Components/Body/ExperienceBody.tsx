import {ExperienceBodyStyled} from "./styled";
import GlassSurface from "../../../../components/public/GlassSurface/GlassSurface";
import React, {useCallback} from "react";

import c from "../../../../media/logos/c.gif"
import w from "../../../../media/logos/w.gif"
import BlurText from "../../../../components/public/BlurText";
import {
    SiAxios, SiFigma, SiFirebase,
    SiI18Next,
    SiJavascript,
    SiMui,
    SiNpm,
    SiReact,
    SiRedux,
    SiTypescript,
    SiWebpack,
    SiZod
} from 'react-icons/si';
import {IconType} from "react-icons";

type TItemExperience = {
    name: string,
    position: string,
    logo: string,
    date: string,
    stack: IconType[]
}
const data:TItemExperience[] = [{
    name: "\"WEBLOCK\" LLC",
    position: "Frontend-Developer",
    logo: w,
    date: "26.09.2023 - Untill Now",
    stack: [SiJavascript,SiTypescript,SiReact,SiNpm,SiRedux, SiMui,SiAxios,SiWebpack,SiI18Next,SiZod]
},{
    name: "\"Clouds Technologies LLC\"",
    position: "Frontend-Developer",
    logo: c,
    date: "10.01.2022 - 10.08.2023",
    stack: [SiJavascript,SiReact,SiRedux,SiNpm,SiAxios,SiWebpack,SiFigma,SiFirebase]
}]

export const ExperienceBody = () => {
    const [show, setShow] = React.useState<number>();

    const onClick = useCallback((index: number) => () => {
        setShow(prevState => prevState === index ? -1 : index)
    }, [])

    return (
        <ExperienceBodyStyled>
            <div className={`list ${show !== -1 ? "selected" : "" }`}>
                {data.map((item, index) => (
                    <GlassSurface
                        mixBlendMode={"difference"}
                        borderRadius={24}
                        className={`item ${show === index ? "active" : ""}`}
                        fallbackOnly
                        propsDiv={{onClick:onClick(index)}}
                    >
                        <img src={item.logo} alt={item.name} />
                        <div className="content">
                            <BlurText
                                text={item.name}
                                className={"label"}
                                delay={150}
                                animateBy="letters"
                                direction="bottom"
                            />
                            <BlurText
                                text={item.position}
                                className={"position"}
                                delay={150}
                                animateBy="letters"
                                direction="bottom"
                            />
                            <BlurText
                                text={item.date}
                                className={"date"}
                                delay={150}
                                animateBy="letters"
                                direction="bottom"
                            />
                            <div className={"stack"}>
                                {item.stack.map((Icon: any, index) => (
                                    <Icon key={index} />
                                ))}
                            </div>
                        </div>
                    </GlassSurface>
                ))}
            </div>
        </ExperienceBodyStyled>
    )
}