import { rest } from "msw";
import type { UserList } from "src/models/user";
import { EXAMPLE_USER_LIST } from "src/models/user";

export const usersHandlers = [
  // ユーザー情報を取得する
  rest.get<never, UserList[], { userId: string }>("*/users/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    const user: UserList[] = EXAMPLE_USER_LIST.filter((user) => user.id === Number(userId));
    return res(ctx.delay(1000), ctx.status(200), ctx.json(user));
  }),
];
