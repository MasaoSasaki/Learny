import { worksHandlers } from "./works";
import { usersHandlers } from "./users";

export const handlers = [...worksHandlers, ...usersHandlers];
