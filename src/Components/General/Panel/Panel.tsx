import React, {useMemo} from "react";
import {PanelStyled} from "./styled";
import GlassSurface from "../../public/GlassSurface/GlassSurface";
import {routes} from "../defaults";
import {useLocation} from "react-router-dom";

export const Panel: React.FunctionComponent = () => {
    const location = useLocation()

    const active = useMemo(() => {
        return !!routes.find((item) => location.pathname === item.path && !item.hiddenNavBar)
    },[location.pathname])

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