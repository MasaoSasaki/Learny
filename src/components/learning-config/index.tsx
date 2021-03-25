import styles from "./index.module.scss";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

type Props = { workCount: number };

export function LearningConfig({ workCount }: Props): JSX.Element {
  const router: NextRouter = useRouter();
  const [isRandom, setRandom] = useState<boolean>(true);            // ランダムで出題するか？
  const [isUnAnswered, setUnAnswered] = useState<boolean>(true);    // 未回答を優先するか？
  const [isAll, setAll] = useState<boolean>(false);                 // 全ての問題を出題するか？
  const [count, setCount] = useState<string>(String(workCount));                 // 何問出題するか？
  const clickButton = () => {
    router.push({
      pathname: "/learning",
      query: { random: isRandom, unAnswered: isUnAnswered, count: count, all: isAll },
    });
  };
  console.log(isRandom, isUnAnswered, count, isAll);
  return (
    <div className="w-full lg:w-5/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white opacity-75 mx-4 my-12 dark:bg-gray-900">
      <div className="p-4 md:p-12 text-center lg:text-left dark:bg-gray-800">
        <div className="block">
          <span>出題設定</span>
          <div className="mt-2 text-left">
            <div>
              <label className={`${"inline-flex items-center"} ${isAll && "opacity-25"}`} htmlFor="count">
                <span>出題数</span>
                <input
                  type="number"
                  className="form-input border ml-2 w-2/6 text-green-900"
                  id="count"
                  value={count}
                  min="1"
                  max={String(workCount)}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                  disabled={isAll && true}
                />
              </label>
              <label className="inline-flex items-center ml-5" htmlFor="all" onChange={() => setAll(!isAll)}>
                <input type="checkbox" className="form-checkbox" id="all" />
                <span className="ml-2">全て(全 {workCount} 問)</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center" htmlFor="random" onChange={() => setRandom(!isRandom)}>
                <input type="checkbox" className="form-checkbox" defaultChecked id="random" />
                <span className="ml-2">出題順をランダムにする。</span>
              </label>
            </div>
            <div>
              <label
                className="inline-flex items-center"
                htmlFor="unAnswered"
                onChange={() => setUnAnswered(!isUnAnswered)}
              >
                <input type="checkbox" className="form-checkbox" defaultChecked id="unAnswered" />
                <span className="ml-2">未回答を優先する。(全体の50%)</span>
              </label>
            </div>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => clickButton()}
        >
          開始する
        </button>
      </div>
    </div>
  );
}
