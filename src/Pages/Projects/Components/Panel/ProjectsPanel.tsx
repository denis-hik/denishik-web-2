import {ProjectsStyled} from "./styled";
import React, {useCallback} from "react";

import block1 from "../../../../media/blocks/gumroad.441fa368006e2347c964.gif"
import block2 from "../../../../media/blocks/projects.7d190269911fe15f0ff7.gif"
import block3 from "../../../../media/blocks/vrchat.3dc4f18d30914ef858d6.gif"
import {Card} from "../../../../Components/General/My/Card/Card";
import {Portal} from "../../../../Components/General/Portal/Portal";

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
    href: "https://projects.denishik.ru/",
}]

export const ProjectsPanel: React.FC<ProgrammingBlockProps> = () => {
    const onClick = useCallback((index: number) => () => {
        const item = data[index]

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

