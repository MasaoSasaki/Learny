import { rest } from "msw";
import type { WorkList } from "src/models/work";
import { EXAMPLE_WORK_LIST } from "src/models/work";

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const worksHandlers = [
  // 特定のユーザーの問題集をcount分取得する
  rest.get<never, WorkList[], { userId: string; tmpWorkList: WorkList[] }>("*/users/:userId/works", (req, res, ctx) => {
    const { userId } = req.params;
    var workList: WorkList[] = shuffle(EXAMPLE_WORK_LIST.filter((work) => work.userId == userId));

    if (req.url.searchParams.get("isAll") === "true") {
    } else if (req.url.searchParams.get("count")) {
      const count: number =
      workList.length > Number(req.url.searchParams.get("count"))
      ? Number(req.url.searchParams.get("count"))
      : workList.length;
      const tmpWorkList: WorkList[] = EXAMPLE_WORK_LIST.filter((work) => work.userId == userId);
      var workList: WorkList[] = new Array();
      var randArray: number[] = new Array();
      let i: number = 0;
      while (i < count) {
        let randIndex: number = Math.floor(Math.random() * count);
        if (!randArray.includes(randIndex)) {
          randArray.push(randIndex);
          workList.push(tmpWorkList[randIndex]);
          i++;
        }
      }
    }

    return res(ctx.delay(1000), ctx.status(200), ctx.json(workList));
  }),
];
