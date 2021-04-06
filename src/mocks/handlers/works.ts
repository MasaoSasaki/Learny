import { rest } from "msw";
import type { WorkList } from "src/models/work";
import { EXAMPLE_WORK_LIST } from "src/models/work";

const shuffle = ([...array]: WorkList[]): WorkList[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const worksHandlers = [
  // 特定のユーザーの問題集をcount分取得する
  rest.get<never, WorkList[], { userId: number; tmpWorkList: WorkList[] }>("*/users/:userId/works", (req, res, ctx) => {
    const { userId } = req.params;
    const createWorkList = (): WorkList[] => {
      let resWorkList = shuffle(EXAMPLE_WORK_LIST.filter((work) => work.userId === Number(userId)));
      if (req.url.searchParams.get("count")) {
        const count: number =
          resWorkList.length > Number(req.url.searchParams.get("count"))
            ? Number(req.url.searchParams.get("count"))
            : resWorkList.length;
        return shuffle(EXAMPLE_WORK_LIST.filter((work) => work.userId === Number(userId))).slice(0, count);
      }
      return resWorkList;
    };
    return res(ctx.delay(1000), ctx.status(200), ctx.json(createWorkList()));
  }),
];
