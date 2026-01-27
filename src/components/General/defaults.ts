import React from "react";
import {StartPage} from "../../pages/Start/Components/StartPage";
import {GooeyNavItem} from "../public/GooeyNav/GooeyNav";
import {EquinePage} from "../../pages/Equine/Components/EquinePage";
import {ProgrammingPage} from "../../pages/Programming/ProgrammingPage";
import {ProjectPage} from "../../pages/Projects/ProjectPage";
import {ExperiencePage} from "../../pages/Experience/ExperiencePage";
import {ProjectMorePage} from "../../pages/ProjectMore/ProjectMorePage";

type TRoute = {
    path: string;
    component: React.FC;
    forceFullPanel?: true,
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
},{
    path: "/more",
    label: "More",
    hiddenNavBar: true,
    forceFullPanel: true,
    component: ProjectMorePage
}]