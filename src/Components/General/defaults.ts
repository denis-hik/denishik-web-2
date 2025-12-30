import React from "react";
import {StartPage} from "../../Pages/Start/Components/StartPage";
import {GooeyNavItem} from "../public/GooeyNav/GooeyNav";
import {EquinePage} from "../../Pages/Equine/Components/EquinePage";
import {ProgrammingPage} from "../../Pages/Programming/ProgrammingPage";
import {ProjectPage} from "../../Pages/Projects/Components/ProjectPage";
import {ExperiencePage} from "../../Pages/Experience/ExperiencePage";

type TRoute = {
    path: string;
    component: React.FC;
} & Omit<GooeyNavItem, "href">

export const routes: TRoute[] = [{
    path: "*",
    label: "Start",
    hiddenNavBar: true,
    component: StartPage
},{
    path: "/programming",
    label: "Programming",
    component: ProgrammingPage
},{
    path: "/equine",
    label: "Horse riding",
    component: EquinePage
},{
    path: "/projects",
    label: "Projects",
    component: ProjectPage
},{
    path: "/experience",
    label: "Experience",
    hiddenNavBar: true,
    component: ExperiencePage
}]