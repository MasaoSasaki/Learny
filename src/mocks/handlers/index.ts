import { questionsHandlers } from "./questions";
import { usersHandlers } from "./users";
import { answersHandlers } from "./answers";

export const handlers = [...questionsHandlers, ...usersHandlers, ...answersHandlers];
