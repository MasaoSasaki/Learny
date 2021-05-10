import { rest } from "msw";
import type { TypeAnswer } from "src/types/types";
import { EXAMPLE_ANSWER_LIST } from "src/models/answer";
import {shuffle} from "src/utils/function"

export const answersHandlers = [
  // 正解情報を取得する
  rest.get<never, TypeAnswer[], { questionId: string }>("*/answers", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(shuffle<TypeAnswer>(EXAMPLE_ANSWER_LIST)));
  }),
];
