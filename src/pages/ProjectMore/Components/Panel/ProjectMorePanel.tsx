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
    images: ["https://private-user-images.githubusercontent.com/41349289/534244342-9e07bf3a-844e-4600-bf59-fc1aaea19cec.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njk0MzI0ODAsIm5iZiI6MTc2OTQzMjE4MCwicGF0aCI6Ii80MTM0OTI4OS81MzQyNDQzNDItOWUwN2JmM2EtODQ0ZS00NjAwLWJmNTktZmMxYWFlYTE5Y2VjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI2VDEyNTYyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgzMzljM2I3ZWYxZWQ1NmZiMTVjYTcxNjI1ZGE3NWVjODE2MDUyZGE0OThjODJmOTgxNWUxZDQ4N2U3N2VjNjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.qesYLD3oPVEygD8Nka8cOM3L9DVB5cfeoKxRhfItUlU"],
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
    images: ["https://private-user-images.githubusercontent.com/41349289/534241406-960fd934-5b63-4546-a998-eaba0b6ec854.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njk0MzIzOTcsIm5iZiI6MTc2OTQzMjA5NywicGF0aCI6Ii80MTM0OTI4OS81MzQyNDE0MDYtOTYwZmQ5MzQtNWI2My00NTQ2LWE5OTgtZWFiYTBiNmVjODU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTI2VDEyNTQ1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQxMzZlZDllMDZiZjUwNTI3MWUwZDFhMzAwNGUyMDdlNDAyNjczZGIyOTRlODc4OWQ4ZWM3MjgyMjcyMjM3ZGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-I7HNhJti6nmZAt-hudgPwmo1-XQqsOyixFX56cJV50"],
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
            </ProjectsMoreStyled>
        </Portal>
    )
}