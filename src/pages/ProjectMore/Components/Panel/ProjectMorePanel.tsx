import React, {useCallback} from "react";
import {Portal} from "../../../../components/General/Portal/Portal";
import {Card} from "../../../../components/General/My/Card/Card";
import {ProjectsMoreStyled} from "./styled";
import {SiAndroid, SiCplusplus, SiJavascript, SiReact, SiSketchfab, SiSwift, SiUnity} from "react-icons/si";
import type {IconType} from "react-icons";
import {FaJava} from "react-icons/fa";

import m from "../../../../media/M.png"
import vrc from "../../../../media/vrchat.png"

type TProjectItem = {
    name: string
    description: string
    stack: (IconType | string)[]
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
    name: "SC Quest VR",
    description: "",
    stack: [FaJava, SiAndroid,SiUnity],
    images: ["https://private-user-images.githubusercontent.com/41349289/571028984-4834112e-44af-42ec-a84f-ac0961587760.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzUyOTcwNTgsIm5iZiI6MTc3NTI5Njc1OCwicGF0aCI6Ii80MTM0OTI4OS81NzEwMjg5ODQtNDgzNDExMmUtNDRhZi00MmVjLWE4NGYtYWMwOTYxNTg3NzYwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDA0VDA5NTkxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwYTk0N2I0N2JjNDU1NjE4ZTk1Y2RhNzllNWI5NDMyOGFkMzUzMjdkMTIwYzE5NWQ1NTAzZDFkNTQ4OGJlMTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.1b0OqB-O_Nr0L8hGhvPZHjfqbGl0P5I23HQk3c82r9I"],
    url: "https://github.com/denis-hik/SC-VR-Android"
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
    name: "Mountain Room",
    description: "",
    stack: ["vrchat"],
    images: [m],
    url: "https://vrchat.com/home/world/wrld_19283481-2419-47c9-91aa-5f4977e0dbb3/info"
},{
    name: "Wood Resin Table",
    description: "",
    stack: [SiSketchfab],
    images: ["https://media.sketchfab.com/models/8d9542eb68154a63a460ddd4b38b1b62/thumbnails/b002dcfcc2c9465e97ff5bc89a3f5e33/761c3f46b07f48689d1a18164849dfc1.jpeg"],
    url: "https://sketchfab.com/3d-models/wood-resin-table-8d9542eb68154a63a460ddd4b38b1b62"
}]

const Icons =  (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): Record<string, any>  => ({
    "vrchat": <img src={vrc} {...props} />
})

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
                                    {item.stack.map((Item: any, index) => {
                                        if (typeof (Item) === "string")
                                            return Icons({
                                                width: 30,
                                                height: 15,
                                                style: {objectFit: "contain"}
                                            })[Item]

                                        return <Item key={index}/>
                                    })}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </ProjectsMoreStyled>
        </Portal>
    )
}