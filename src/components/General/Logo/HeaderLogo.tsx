import {useState, useEffect, useCallback} from 'react';
import logo from '../../../media/logo.svg';
import {HeaderLogoStyled} from "./styled";
import {useNavigate} from "react-router-dom";
import MetallicPaint, {parseLogoImage} from "../../public/MetallicPaint/MetallicPaint";

const HeaderLogo = () => {
    const navigate = useNavigate();

    const [imageData, setImageData] = useState<ImageData>(new ImageData(1, 1));

    const onStart = useCallback(() => {
        navigate("/")
    }, [])

    useEffect(() => {
        async function loadDefaultImage() {
            try {
                const response = await fetch(logo)
                const svgBlob = await response.blob()
                const file = new File([svgBlob], 'image.svg', { type: 'image/svg+xml' });

                const parsedData = await parseLogoImage(file)
                !!parsedData?.imageData && setImageData(parsedData?.imageData)

            } catch (err) {
                console.error("Error loading default image:", err)
            }
        }

        loadDefaultImage();
    }, []);

    return (
        <HeaderLogoStyled className={"logo"} onClick={onStart}>
            <MetallicPaint
                imageData={imageData}
                params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }}
            />
        </HeaderLogoStyled>
    );
}

export default HeaderLogo;