import { useState } from "react";
import type { ListWork } from "src/models/work";
import { Answer } from "../answer"

type Props = {
  workData: ListWork[];
};

export function Question({ workData }: Props): JSX.Element {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const movePage = (button: string) => {
    switch (button) {
      case "next":
        if (pageNumber === workData.length) return;
        setPageNumber(pageNumber + 1);
        break;
      case "prev":
        if (pageNumber === 1) return;
        setPageNumber(pageNumber - 1);
        break;
    }
  };
  return (
    <div className="w-11/12 lg:w-10/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-auto my-12 dark:bg-gray-700">
      <div className="p-4 text-left lg:text-left">
        <h2 className="text-3xl font-bold pt-8 lg:pt-0">問題：{pageNumber}</h2>
        <p>{workData[pageNumber - 1].question}</p>
        <div className="mx-auto w-full pt-3 border-b-2 border-blue-500"></div>
        <Answer type={ workData[pageNumber-1].type}/>
        <div className="pt-12 pb-8 text-center">
          <div className="inline-flex">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={() => movePage("prev")}
            >
              Prev
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={() => movePage("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
