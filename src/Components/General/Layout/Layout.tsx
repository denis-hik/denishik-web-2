import React from "react";
import {LayoutStyled} from "./styled";

export interface PagePropType {
    component: React.FC;
}

const Layout:React.FC<PagePropType>  = ({ component: Component }) => {
    return (
        <LayoutStyled>
            <Component />
        </LayoutStyled>
    )
}

export default Layout;