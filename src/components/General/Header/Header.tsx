import GlassSurface from "../../public/GlassSurface/GlassSurface";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import logo from "../../../media/logo.png";
import DecryptedText from "../../public/DecryptedText/DecryptedText";
import {HeaderStyled} from "./styled";
import {useLocation, useNavigate} from "react-router-dom";
import {routes} from "../defaults";

export const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const active = useMemo(() => {
        return !!routes.find((item) => (location.pathname === item.path && !item.hiddenNavBar) || !!item.forceFullPanel)
    },[location.pathname])

    const [show, setShow] = useState(true)

    const onStart = useCallback(() => {
        navigate("/")
    }, [])

    useEffect(() => {
        const threshold = 0.9;

        const onScroll = () => {
            const doc = document.documentElement;

            const scrollTop = doc.scrollTop;
            const viewportH = window.innerHeight;
            const fullH = doc.scrollHeight;

            const maxScroll = fullH - viewportH;
            if (maxScroll <= 0) return;

            const progress = scrollTop / maxScroll;

            setShow(progress >= threshold)
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <HeaderStyled className={(active ? 'active' : '') + (show ? " hide" :'')}>
            <GlassSurface
                mixBlendMode={"difference"}
                borderRadius={24}
                id={"panel-glass"}
                fallbackOnly
            >
                <div className={"logo"}>
                    <img src={logo} onClick={onStart} />
                </div>
                <div className={"text"}>
                    <DecryptedText
                        text={"Denis Hik"}
                        speed={100}
                        animateOn={"both"}
                        revealDirection={"center"}
                        maxIterations={20}
                    />
                </div>
                <div className={"logo1"} />
            </GlassSurface>
        </HeaderStyled>
    )
}