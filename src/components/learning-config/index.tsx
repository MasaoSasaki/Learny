import styles from "./index.module.scss";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

type Props = { workCount: number };

export function LearningConfig({ workCount }: Props): JSX.Element {
  const router: NextRouter = useRouter();
  const [random, setRandom] = useState<boolean>(true);
  const [unAnswered, setUnAnswered] = useState<boolean>(true);
  const [count, setCount] = useState<number | null>(10);
  const clickButton = () => {
    router.push({
      pathname: "/learning",
      query: { random: random, unAnswered: unAnswered, count: count },
    });
  };
  console.log(random, unAnswered, count);
  return (
    <div className="w-full lg:w-5/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white opacity-75 mx-4 my-12 dark:bg-gray-900">
      <div className="p-4 md:p-12 text-center lg:text-left dark:bg-gray-800">
        {workCount}
        <div className="block text-left">
          <span className="text-gray-700">出題設定</span>
          <div className="mt-2">
            <div>
              <input
                type="number"
                className="form"
                id="count"
                onClick={(e) => {
                  setCount(e.target.value);
                }}
              />
              <label className="inline-flex items-center" htmlFor="count">
                <span className="ml-2">問題数</span>
              </label>
            </div>
            <div>
              <input type="checkbox" className="form-checkbox" defaultChecked id="random" />
              <label className="inline-flex items-center" htmlFor="random" onClick={() => setRandom(!random)}>
                <span className="ml-2">出題順をランダムにする。</span>
              </label>
            </div>
            <div>
              <input type="checkbox" className="form-checkbox" defaultChecked id="unAnswered" />
              <label
                className="inline-flex items-center"
                htmlFor="unAnswered"
                onClick={() => setUnAnswered(!unAnswered)}
              >
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
