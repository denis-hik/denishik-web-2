import Masonry, {TMasonryItem} from "../../../../components/public/Masonry/Masonry";
import {EquinePanelStyled} from "./styled";
import {Portal} from "../../../../components/General/Portal/Portal";
import {useEffect, useState} from "react";

import img0 from "../../../../media/equine/0.jpg"
import img1 from "../../../../media/equine/1.jpg"
import img2 from "../../../../media/equine/2.jpg"
import img3 from "../../../../media/equine/3.jpg"
import img4 from "../../../../media/equine/4.jpg"
import img5 from "../../../../media/equine/5.jpg"
import img6 from "../../../../media/equine/7.jpg"


const images: (TMasonryItem & {label: string})[] = [{
    id: "0",
    img: img1,
    url: "https://www.instagram.com/p/CQvcEVmNZiZ/",
    height: 300,
    label: "SCULPTURE RIDE"
},{
    id: "1",
    img: img0,
    url: "https://www.instagram.com/p/CQvcEVmNZiZ/",
    height: 700,
    label: ""
},{
    id: "2",
    img: img2,
    url: "https://www.instagram.com/p/CO8RqhKNymb/",
    height: 1300,
    label: "Bonya"
},{
    id: "3",
    img: img3,
    url: "https://www.instagram.com/p/B6IbEoAJP2w/?img_index=1",
    height: 600,
    label: "Ratibor"
},{
    id: "4",
    img: img4,
    url: "https://www.instagram.com/p/BnEDGV1D26E/",
    label: "Ekstrim",
    height: 1000
},{
    id: "5",
    img: img5,
    url: "https://www.instagram.com/p/Cum3wqst6W_",
    label: "Gosha",
    height: 700
},{
    id: "6",
    img: img6,
    url: "https://www.instagram.com/p/BnE0H0MD1RZ/",
    label: "Fat",
    height: 600
}]

export const EquinePanel = () => {

    const [data, setData] = useState<TMasonryItem[]>([])

    useEffect(() => {
        setTimeout(() => setData(images), 300)

        return () => {
            setData([])
        }
    }, [])

    return (
        <Portal id={"panel-glass"}>
            <EquinePanelStyled>
                {!!data?.length && <Masonry
                    items={data}
                    ease="power3.out"
                    duration={0.6}
                    stagger={1}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                />}
            </EquinePanelStyled>
        </Portal>
    )
}