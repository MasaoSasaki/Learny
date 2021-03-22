import { rest } from "msw";
import type { ListWork } from "src/models/work";
import { EXAMPLE_WORK_LIST } from "src/models/work";

export const worksHandlers = [
  // 問題集一覧を取得する
  rest.get<never, ListWork[]>("*/works", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(EXAMPLE_WORK_LIST));
  })
];
