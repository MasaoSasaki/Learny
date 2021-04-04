import { useState } from "react";
import type { WorkList } from "src/models/work";
import type { AnswerList } from "src/models/answer";

type Props = {
  workData: WorkList[];
  answerData: AnswerList[];
  onClick: Function;
};

export function Question({ workData, answerData, onClick }: Props): JSX.Element {
  console.log(workData);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const questionData = workData[pageNumber - 1];
  const form = () => {
    switch (questionData.type) {
      case "mulch":
        return (
          <>
            {answerData.map(({ workId, answer }, index) => {
              if (workId !== String(questionData.id)) return;
              return (
                <div className="m-3" key={index}>
                  <label className="flex items-center">
                    <input type="checkbox" className="m-2 form-checkbox h-5 w-5" />
                    <span className="ml-2">{answer}</span>
                  </label>
                </div>
              );
            })}
          </>
        ); // TODO: 回答数に合わせて動的に変更
      case "only":
        return (
          <>
            {answerData.map(({ workId, answer }, index) => {
              if (workId !== String(questionData.id)) return;
              return (
                <div className="m-3" key={index}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question${questionData.id}`}
                      className="m-2 block form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{answer}</span>
                  </label>
                </div>
              );
            })}
          </>
        ); // TODO: 回答数に合わせて動的に変更
      case "keyword":
        return (
          <input
            type="text"
            className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
          />
        );
    }
  };
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
        <p>{questionData.question}</p>
        <div className="mx-auto w-full pt-3 border-b-2 border-blue-500"></div>
        <div className="mt-4 px-4 py-6 bg-blue-50 shadow-inner border-white rounded-xl dark:bg-gray-800">{form()}</div>
        <div className="pt-12 pb-8 text-center">
          <div className="inline-flex">
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
                pageNumber === 1 && "hidden"
              }`}
              onClick={() => movePage("prev")}
            >
              Prev
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${
                pageNumber === 0 || "hidden"
              }`}
            >
              回答を送信する
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
                pageNumber === workData.length && "hidden"
              }`}
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
