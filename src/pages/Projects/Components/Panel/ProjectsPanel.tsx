import {ProjectsStyled} from "./styled";
import React, {useCallback} from "react";

import block1 from "../../../../media/blocks/gumroad.441fa368006e2347c964.gif"
import block2 from "../../../../media/blocks/projects.7d190269911fe15f0ff7.gif"
import block3 from "../../../../media/blocks/vrchat.3dc4f18d30914ef858d6.gif"
import {Card} from "../../../../components/General/My/Card/Card";
import {Portal} from "../../../../components/General/Portal/Portal";
import {useNavigate} from "react-router-dom";

interface ProgrammingBlockProps {
}

const data = [{
    label: "Gumroad",
    description: "Gumroad",
    image: block1,
    href: "https://denishik.gumroad.com/",
},{
    label: "VRChat",
    description: "VRChat",
    image: block3,
    href: "https://vrchat.denishik.io/",
},{
    label: "",
    description: "More",
    image: block2,
    href: "/more",
}]

export const ProjectsPanel: React.FC<ProgrammingBlockProps> = () => {
    const navigate = useNavigate()

    const onClick = useCallback((index: number) => () => {
        const item = data[index]
        if (!item.href.includes("https://"))
            return navigate(item.href)

        const win = window.open(item.href, "_blank");
        if (win) win.opener = null;
    }, [])

    return (
        <Portal id={"panel-glass"}>
            <ProjectsStyled className={"active"}>
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
                            onClick={onClick(index)}
                        />
                    ))}
                </div>
            </ProjectsStyled>
        </Portal>
    )
}

