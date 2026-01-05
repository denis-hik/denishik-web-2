import {ProgrammingStyled} from "./styled";
import React, {useCallback, useMemo} from "react";
import {
    SiGit,
    SiJavascript,
    SiMaterialdesign,
    SiMui,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';
import {Card} from "../../../../components/General/My/Card/Card";
import {Portal} from "../../../../components/General/Portal/Portal";
import LogoLoop, {LogoItem} from "../../../../components/public/LogoLoop/LogoLoop";
import {useNavigate} from "react-router-dom";

import img2 from "../../../../media/blocks/git.gif"
import img1 from "../../../../media/experience.gif"
import img3 from "../../../../media/blocks/CV.gif"
import {useSelector} from "react-redux";
import {resumeSelector} from "../../../../context/slice/selectors";

const icons = [{
    node: SiReact,
    title: "React",
    href: "https://react.dev"
}, {
    node: SiJavascript,
    title: "js",
    href: "https://nodejs.org/en"
},{
    node: SiTypescript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org"
},{
    node: SiTailwindcss,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
},{
    node: SiGit,
    title: "Git-hub",
    href: "https://github.com"
},{
    node: SiMaterialdesign,
    title: "Material Design",
    href: "https://m3.material.io"
},{
    node: SiMui,
    title: "MuiUI",
    href: "https://mui.com/material-ui"
},{
    node: SiRedux,
    title: "MuiUI",
    href: "https://redux-toolkit.js.org"
}].map(item => ({
    ...item,
// @ts-ignore
    node: <item.node color={"#fff"} style={{cursor: "pointer"}} /> as any,
}))



export const ProgrammingPanel = () => {
    const navigate = useNavigate();

    const resume = useSelector(resumeSelector)

    const data = useMemo(() => [{
        label: "Experience",
        image: img1,
        description: "Experience",
        href: "/experience"
    },{
        label: "GitHub",
        image: img2,
        description: "GitHub",
        href: "https://github.com/denis-hik"
    },
    ...(!!resume?.length ? [{
        label: "CV",
        image: img3,
        description: "CV",
        href: resume
    }] : [])
    ], [resume])

    const onClickCard = useCallback((index: number) => () => {
        const item = data[index]

        if (!!item?.href?.includes("https://")) {
            const win = window.open(item.href, "_blank")
            if (win) win.opener = null
            return
        }

        !!item?.href?.length && navigate(item.href);
    }, [])

    const onClickLogo = useCallback((item: LogoItem) => {
        !!item?.href?.length && window.open(item.href, "_blank");
    }, [])

    return (
        <Portal id={"panel-glass"}>
            <ProgrammingStyled className={"active"}>
                <div className={"des"}>

                </div>
                <div className={"list"}>
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            image={item.image}
                            description={item.description}
                            isBlank={item.href.includes("https://")}
                            imageProps={{
                                baseImageSrc: "#000"
                            }}
                            onClick={onClickCard(index)}
                        />
                    ))}
                </div>
                <div className={"logos"}>
                    <LogoLoop
                        logos={icons}
                        pauseOnHover
                        onClick={onClickLogo}
                    />
                </div>
            </ProgrammingStyled>
        </Portal>
    )
}

