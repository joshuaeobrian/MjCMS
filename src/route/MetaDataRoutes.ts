import {MetaDataController} from "../controller/MetaDataController";

export const METADATA_ROUTES =[
  {
    method: "get",
    route: "/metadata",
    controller: MetaDataController,
    action: "all"
  }, 

  {
    method: "post",
    route: "/metadata",
    controller: MetaDataController,
    action: "save"
  },
  
  {
    method: "get",
    route: "/metadata/:id",
    controller: MetaDataController,
    action: "one"
  },
  
  {
    method: "delete",
    route: "/metadata/:id",
    controller: MetaDataController,
    action: "remove"
  },
];