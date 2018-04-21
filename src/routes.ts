import {UserController} from "./controller/UserController";
import {USER_ROUTES} from "./route/UserRoutes";
import {ROLE_ROUTE} from "./route/RoleRoutes";

export const Routes = []
    .concat(USER_ROUTES)
    .concat(ROLE_ROUTE);



// export const Routes =[
//     {
//         method: "get",
//         route: "/users",
//         controller: UserController,
//         action: "all"
//     }, {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one"
// }, {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "save"
// }, {
//     method: "delete",
//     route: "/users",
//     controller: UserController,
//     action: "disableUser"
// }
// ];