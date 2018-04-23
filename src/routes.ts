import {USER_ROUTES} from "./route/UserRoutes";
import {ROLE_ROUTES} from "./route/RoleRoutes";
import {METADATA_ROUTES} from "./route/MetaDataRoutes";
import {SECTION_ROUTES} from "./route/SectionRoutes";
import {PAGE_ROUTES} from "./route/PageRoutes";
import {SESSION_ROUTES} from "./route/SessionRoutes";

export const Routes = []
    .concat(USER_ROUTES)
    .concat(ROLE_ROUTES)
    .concat(METADATA_ROUTES)
    .concat(SECTION_ROUTES)
    .concat(PAGE_ROUTES)
    .concat(SESSION_ROUTES);

