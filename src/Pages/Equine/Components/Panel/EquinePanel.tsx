import Masonry, {TMasonryItem} from "../../../../Components/public/Masonry/Masonry";
import {EquinePanelStyled} from "./styled";

import img1 from "../../../../media/equine/1.jpg"
import img2 from "../../../../media/equine/2.jpg"
import img3 from "../../../../media/equine/3.jpg"
import img4 from "../../../../media/equine/4.jpg"
import img5 from "../../../../media/equine/5.jpg"
import img6 from "../../../../media/equine/6.jpg"
import {Portal} from "../../../../Components/General/Portal/Portal";


const images: TMasonryItem[] = [{
    id: "1",
    img: img1,
    url: "",
    height: 300
},{
    id: "2",
    img: img2,
    url: "",
    height: 1300
},{
    id: "3",
    img: img3,
    url: "",
    height: 600
},{
    id: "4",
    img: img4,
    url: "",
    height: 1000
},{
    id: "5",
    img: img5,
    url: "",
    height: 700
},{
    id: "6",
    img: img6,
    url: "",
    height: 600
}]

export const EquinePanel = () => {

    return (
        <Portal id={"panel-glass"}>
            <EquinePanelStyled>
                <Masonry
                    items={images}
                    ease="power3.out"
                    duration={0.6}
                    stagger={1}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                />
            </EquinePanelStyled>
        </Portal>
    )
}