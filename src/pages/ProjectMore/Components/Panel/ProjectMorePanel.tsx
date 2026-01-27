import React, {useCallback} from "react";
import {Portal} from "../../../../components/General/Portal/Portal";
import {Card} from "../../../../components/General/My/Card/Card";
import {ProjectsMoreStyled} from "./styled";
import {SiAndroid, SiCplusplus, SiJavascript, SiReact, SiSketchfab, SiSwift} from "react-icons/si";
import type {IconType} from "react-icons";
import {FaJava} from "react-icons/fa";

type TProjectItem = {
    name: string
    description: string
    stack: (IconType)[]
    images: string[]
    url: string
}
const projectsData: TProjectItem[] = [{
    name: "vrchat-web-2",
    description: "",
    stack: [SiJavascript,SiReact,],
    images: ["https://github.com/user-attachments/assets/9e07bf3a-844e-4600-bf59-fc1aaea19cec"],
    url: "https://github.com/denis-hik/vrchat-web-2"
},{
    name: "SC Android",
    description: "",
    stack: [FaJava, SiAndroid],
    images: ["https://github.com/denis-hik/SC-Android/blob/master/screens/photo0.jpg?raw=true"],
    url: "https://github.com/denis-hik/SC-Android"
},{
    name: "SC-Led-Ardruino",
    description: "",
    stack: [SiCplusplus],
    images: ["https://github.com/denis-hik/SC-Led-Ardruino/raw/master/photo.jpg?raw=true"],
    url: "https://github.com/denis-hik/SC-Led-Ardruino"
},{
    name: "VRCatApp-IOS",
    description: "",
    stack: [SiSwift],
    images: ["https://github.com/user-attachments/assets/960fd934-5b63-4546-a998-eaba0b6ec854"],
    url: "https://github.com/denis-hik/VRCatApp-IOS"
},{
    name: "Wood Resin Table",
    description: "",
    stack: [SiSketchfab],
    images: ["https://media.sketchfab.com/models/8d9542eb68154a63a460ddd4b38b1b62/thumbnails/b002dcfcc2c9465e97ff5bc89a3f5e33/761c3f46b07f48689d1a18164849dfc1.jpeg"],
    url: "https://sketchfab.com/3d-models/wood-resin-table-8d9542eb68154a63a460ddd4b38b1b62"
}]

export const ProjectsMorePanel = () => {

    const onClick = useCallback((index: number) => {
        const data = projectsData[index];

        window.open(data.url, "_blank");
    }, [])

    return (
        <Portal id={"panel-glass"}>
            <ProjectsMoreStyled className={"active"}>
                <div className={"container more"}>
                    <div className={"list"}>
                        {projectsData.map((item, index) => (
                            <Card
                                key={index}
                                image={item.images[0]}
                                description={item.name}
                                isBlank={item.url.includes("https://")}
                                imageProps={{
                                    baseImageSrc: "#000"
                                }}
                                onClick={() => onClick(index)}
                            >
                                <div className={"stack"}>
                                    {item.stack.map((Item: any, index) => <Item key={index}  />)}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </ProjectsMoreStyled>
        </Portal>
    )
}