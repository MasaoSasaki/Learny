import { worksHandlers } from "./works";
import { usersHandlers } from "./users";
import { answersHandlers } from "./answers";

export const handlers = [...worksHandlers, ...usersHandlers, ...answersHandlers];
