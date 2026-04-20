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
    labelKey: string;
} & Omit<GooeyNavItem, "href">

export const routes: TRoute[] = [{
    path: "*",
    label: "",
    labelKey: "nav.start",
    hiddenNavBar: true,
    component: StartPage
},{
    path: "/programming",
    label: "",
    labelKey: "nav.programming",
    component: ProgrammingPage
},{
    path: "/equine",
    label: "",
    labelKey: "nav.equine",
    component: EquinePage
},{
    path: "/projects",
    label: "",
    labelKey: "nav.projects",
    component: ProjectPage
},{
    path: "/experience",
    label: "",
    labelKey: "nav.experience",
    hiddenNavBar: true,
    component: ExperiencePage
},{
    path: "/more",
    label: "",
    labelKey: "nav.more",
    hiddenNavBar: true,
    forceFullPanel: true,
    component: ProjectMorePage
}]
