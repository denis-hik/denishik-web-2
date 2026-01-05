import React, {createContext, useEffect} from "react";
import {useAppDispatch} from "../store/hooks";
import {getAnalytics} from "./actions/analytic/get";
import {useSelector} from "react-redux";
import {resumeSelector} from "./slice/selectors";

export const pageContext = createContext<{}>({});

const PageContextProvider: React.FC<{ children: any }> = ({children}) => {
    const dispatch = useAppDispatch()

    const resume = useSelector(resumeSelector)

    useEffect(() => {
        if (!localStorage.getItem("resume")) {
            dispatch(getAnalytics())
        }
    }, []);

    useEffect(() => {
        !!resume?.length && localStorage.setItem("resume", resume);
    }, [resume]);

    return (
        <pageContext.Provider value={{}}>
            {children}
        </pageContext.Provider>
    );
};
export default PageContextProvider