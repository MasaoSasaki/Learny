import { useState, useEffect } from "react";
import type { TypeQuestion } from "src/models/question";
import type { TypeAnswer } from "src/models/answer";

type Props = {
  currentQuestionDataList: TypeQuestion[];
  answerDataList: TypeAnswer[];
};

type tmpUserAnswer = {
  questionId: number;
  answer: string;
};

type tmpOnlyAnswer = {
  questionId: number;
  answer: string;
};

export function Question({ currentQuestionDataList, answerDataList }: Props): JSX.Element {
  console.log("render------------------------------------------------------------------");
  const [pageNumber, changePageNumber] = useState<number>(1);
  console.log("pageNumber", pageNumber);
  const [userAnswers, setUserAnswers] = useState<tmpUserAnswer[]>([]);
  console.log("userAnswers", userAnswers);
  const [onlyAnswer, setOnlyAnswer] = useState<tmpOnlyAnswer>({ questionId: 0, answer: "" });
  console.log("onlyAnswerは", onlyAnswer, "でレンダリングしました。");
  const [wordAnswer, setWordAnswer] = useState<string>("");
  console.log("answerWordは", wordAnswer, "でレンダリングしました。");
  const questionData: TypeQuestion = currentQuestionDataList[pageNumber - 1];
  console.log("questionData", questionData);

  useEffect(() => {
    console.log("useEffect-----------------------------", wordAnswer);
    console.log(userAnswers[pageNumber - 1] ? userAnswers[pageNumber - 1].answer : "未回答です。");
    switch (questionData.type) {
      case "mulch":
        console.log("この問題はmulchです");
        break;
      case "only":
        console.log("この問題はonlyです");
        if (userAnswers[pageNumber - 1] === undefined) {
          setOnlyAnswer({ questionId: 0, answer: "" });
          console.log("true answerWordを", wordAnswer, "に変更しました。");
        } else {
          setOnlyAnswer({ questionId: userAnswers[pageNumber - 1].questionId, answer: userAnswers[pageNumber - 1].answer });
          console.log("false answerWordを", wordAnswer, "に変更しました。");
        }
        break;
      case "word":
        console.log("この問題はwordです");
        if (userAnswers[pageNumber - 1] === undefined) {
          setWordAnswer("");
          console.log("true answerWordを", wordAnswer, "に変更しました。");
        } else {
          setWordAnswer(userAnswers[pageNumber - 1].answer);
          console.log("false answerWordを", wordAnswer, "に変更しました。");
        }
        break;
    }
  }, [pageNumber]);
  const form = (): JSX.Element => {
    switch (questionData.type) {
      case "mulch":
        return (
          <>
            {answerDataList.map(({ questionId, answer }, index) => {
              if (questionId !== questionData.id) return;
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
        );
      case "only":
        return (
          <>
            {answerDataList.map(({ questionId, answer }, index) => {
              if (questionId !== questionData.id) return;
              return (
                <div className="m-3" key={index}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question${questionData.id}`}
                      className="m-2 block form-radio h-5 w-5 text-blue-600"
                      onChange={() => setOnlyAnswer({ questionId: pageNumber, answer: answer })}
                      checked={onlyAnswer.questionId === pageNumber && onlyAnswer.answer === answer}
                    />
                    <span className="ml-2">{answer}</span>
                  </label>
                </div>
              );
            })}
          </>
        );
      case "word":
        return (
          <input
            type="text"
            value={wordAnswer}
            onChange={(e) => setWordAnswer(e.target.value)}
            className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
          />
        );
    }
  };
  const movePage = (button: string) => {
    switch (questionData.type) {
      case "mulch":
        const tmpUserMulchAnswer: tmpUserAnswer = {
          questionId: pageNumber,
          answer: "mulchQuestion",
        };
        !userAnswers[pageNumber - 1]
          ? setUserAnswers([...userAnswers, tmpUserMulchAnswer])
          : setUserAnswers(
              userAnswers.map((userAnswer) => (userAnswer.questionId === pageNumber ? tmpUserMulchAnswer : userAnswer))
            );
        break;
      case "only":
        const tmpUserOnlyAnswer: tmpUserAnswer = {
          questionId: pageNumber,
          answer: onlyAnswer.answer,
        };
        !userAnswers[pageNumber - 1]
          ? setUserAnswers([...userAnswers, tmpUserOnlyAnswer])
          : setUserAnswers(
              userAnswers.map((userAnswer) => (userAnswer.questionId === pageNumber ? tmpUserOnlyAnswer : userAnswer))
            );
        break;
      case "word":
        const tmpUserWordAnswer: tmpUserAnswer = {
          questionId: pageNumber,
          answer: wordAnswer,
        };
        !userAnswers[pageNumber - 1]
          ? setUserAnswers([...userAnswers, tmpUserWordAnswer])
          : setUserAnswers(
              userAnswers.map((userAnswer) => (userAnswer.questionId === pageNumber ? tmpUserWordAnswer : userAnswer))
            );
    }
    switch (button) {
      case "prev":
        if (pageNumber === 1) return;
        changePageNumber(pageNumber - 1);
        break;
      case "next":
        if (pageNumber === currentQuestionDataList.length) return;
        changePageNumber(pageNumber + 1);
        break;
    }
  };
  const submit = (): void => {
    alert("未回答があります。送信してよろしいですか？\n（未回答分は保存されません。）");
  };
  return (
    <div className="w-11/12 lg:w-10/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-auto my-12 dark:bg-gray-700">
      <div className="p-4 text-left lg:text-left">
        <h2 className="text-3xl font-bold pt-8 lg:pt-0">問題：{pageNumber}</h2>
        <p>{questionData.question}</p>
        <div className="mx-auto w-full pt-3 border-b-2 border-blue-500" />
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
              className={`bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 ${
                pageNumber === 1 && "rounded-l"
              } ${pageNumber === currentQuestionDataList.length && "rounded-r"}`}
              onClick={() => submit()}
            >
              回答を送信する
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
                pageNumber === currentQuestionDataList.length && "hidden"
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
