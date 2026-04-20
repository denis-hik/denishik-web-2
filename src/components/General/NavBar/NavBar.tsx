import React, {useCallback, useMemo} from 'react';
import '../../public/GooeyNav/GooeyNav.css'
import GooeyNav, {GooeyNavItem} from "../../public/GooeyNav/GooeyNav";
import {routes} from "../defaults";
import {useLocation, useNavigate} from "react-router-dom";
import {NavBarStyled} from "./styled";
import {useTranslate} from "../../../hooks/useTranslate";

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const t = useTranslate()

    const items = useMemo(():GooeyNavItem[] =>
        routes
            .filter(({hiddenNavBar}) => !hiddenNavBar)
            .map(({path, component, labelKey, ...props}) => ({href: path, ...props, label: t(labelKey)}))
    , [t])
    const value = useMemo(() => {
        return items.findIndex((item:GooeyNavItem) => location.pathname.includes(item.href))
    }, [location?.pathname, items])

    const onSelect = useCallback((item: GooeyNavItem) => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate(item.href)
    }, [navigate])

    return (
        <NavBarStyled className={(value === -1 ? "active" : "") + (location.pathname === routes[4].path ? " exp" : "")}>
            <GooeyNav
                items={items}
                indexValue={value}
                initialActiveIndex={value}
                onSelect={onSelect}
            />
        </NavBarStyled>
    )
};

export default NavBar;
