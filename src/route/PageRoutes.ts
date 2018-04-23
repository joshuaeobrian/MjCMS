import {PageController} from "../controller/PageController";


export const PAGE_ROUTES =[
    {
        method: "get",
        route: "/pages",
        controller: PageController,
        action: "all"
    }, {
        method: "get",
        route: "/pages/:id",
        controller: PageController,
        action: "one"
    }, {
        method: "post",
        route: "/pages",
        controller: PageController,
        action: "save"
    }, {
        method: "delete",
        route: "/pages/:id",
        controller: PageController,
        action: "remove"
    }
];