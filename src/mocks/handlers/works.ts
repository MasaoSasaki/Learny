import { rest } from "msw";
import type { ListWork } from "src/models/work";
import { EXAMPLE_WORK_LIST } from "src/models/work";

export const worksHandlers = [
  // 特定のユーザーの問題集一覧を取得する
  rest.get<never, ListWork[], { userId: string; workList: ListWork[] }>("*/users/:userId/works", (req, res, ctx) => {
    const { userId } = req.params;
    const workList: ListWork[] = EXAMPLE_WORK_LIST.filter((work) => work.userId == userId);
    return res(ctx.delay(1000), ctx.status(200), ctx.json(workList));
  }),

  // 全てのユーザーの問題集一覧を取得する
  rest.get<never, ListWork[]>("*/works", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(EXAMPLE_WORK_LIST));
  }),
];
