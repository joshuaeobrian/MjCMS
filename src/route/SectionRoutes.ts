import {SectionController} from "../controller/SectionController";

export const SECTION_ROUTES = [
  {
    method: "get",
    route: "/sections",
    controller: SectionController,
    action: "all"
  },

  {
    method: "post",
    route: "/sections",
    controller: SectionController,
    action: "save"
  },

  {
    method: "get",
    route: "/sections/:id",
    controller: SectionController,
    action: "one"
  },

  {
    method: "delete",
    route: "/sections/:id",
    controller: SectionController,
    action: "remove"
  },
]