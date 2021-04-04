import { rest } from "msw";
import type { AnswerList } from "src/models/answer";
import { EXAMPLE_ANSWER_LIST } from "src/models/answer";

export const answersHandlers = [
  // 正解情報を取得する
  rest.get<never, AnswerList[], { workId: string }>("*/answers", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(EXAMPLE_ANSWER_LIST));
  }),
];
