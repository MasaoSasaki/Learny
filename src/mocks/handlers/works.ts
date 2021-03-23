import { rest } from "msw";
import type { ListWork } from "src/models/work";
import { EXAMPLE_USER1_WORK_LIST, EXAMPLE_USER2_WORK_LIST, EXAMPLE_USER3_WORK_LIST } from "src/models/work";

export const worksHandlers = [
  // 特定のユーザーの問題集一覧を取得する
  rest.get<never, ListWork[], {userId: string}>("*/users/:userId/works", (req, res, ctx) => {
    const { userId } = req.params;
    const workList = userId === "1" ? EXAMPLE_USER1_WORK_LIST : EXAMPLE_USER2_WORK_LIST
    return res(ctx.delay(1000), ctx.status(200), ctx.json(workList));
  }),

  // 全てのユーザーの問題集一覧を取得する
  rest.get<never, ListWork[]>("*/works", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(EXAMPLE_USER1_WORK_LIST));
  }),
];
