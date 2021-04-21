import { rest } from "msw";
import type { TypeQuestion } from "src/models/question";
import { EXAMPLE_QUESTION_LIST } from "src/models/question";

const shuffle = ([...array]: TypeQuestion[]): TypeQuestion[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const questionsHandlers = [
  // 特定のユーザーの問題集をcount分取得する
  rest.get<never, TypeQuestion[], { userId: number; tmpQuestionList: TypeQuestion[] }>("*/users/:userId/questions", (req, res, ctx) => {
    const { userId } = req.params;
    const createQuestionList = (): TypeQuestion[] => {
      let resQuestionList = shuffle(EXAMPLE_QUESTION_LIST.filter((question) => question.userId === Number(userId)));
      if (req.url.searchParams.get("count")) {
        const count: number =
          resQuestionList.length > Number(req.url.searchParams.get("count"))
            ? Number(req.url.searchParams.get("count"))
            : resQuestionList.length;
        return shuffle(EXAMPLE_QUESTION_LIST.filter((question) => question.userId === Number(userId))).slice(0, count);
      }
      return resQuestionList;
    };
    return res(ctx.delay(1000), ctx.status(200), ctx.json(createQuestionList()));
  }),
];
