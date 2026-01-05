import React, {useEffect, useMemo} from "react";
import {PanelStyled} from "./styled";
import GlassSurface from "../../public/GlassSurface/GlassSurface";
import {routes} from "../defaults";
import {useLocation} from "react-router-dom";

export const Panel: React.FunctionComponent = () => {
    const location = useLocation()

    const active = useMemo(() => {
        return !!routes.find((item) => location.pathname === item.path && !item.hiddenNavBar)
    },[location.pathname])

    useEffect(() => {
        if (!active)
            return

        const timer = setTimeout(() => {
            window.scrollTo({ top: document.documentElement.scrollHeight * 0.1, left: 0, behavior: "smooth" })
        }, 2000)

        const onScroll = () => {
            timer && clearTimeout(timer)
        }

        window.addEventListener("scroll",onScroll)
        return () => {

            window.removeEventListener("scroll", onScroll)
        }
    }, [active]);

    return (
        <PanelStyled className={active ? 'active' : ''}>
            <GlassSurface
                mixBlendMode={"difference"}
                borderRadius={24}
                id={"panel-glass"}
                fallbackOnly
            />
        </PanelStyled>
    )
}