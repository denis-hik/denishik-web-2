import {createPortal} from "react-dom";
import React, {useEffect, useMemo} from "react";

interface IPortalProps {
    children: React.ReactNode;
    id: string
}

export const Portal: React.FC<IPortalProps> = ({children, id}) => {
    const [ref, setRef] = React.useState<any>(null);

    useEffect(() => {
        setRef(document.getElementById(id))
    }, []);

    return useMemo(() => {
        if (ref === null)
            return null

        return createPortal(children, ref)
    }, [ref])
}