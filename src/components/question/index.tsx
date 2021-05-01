import { useState, useEffect } from "react";
import type { TypeQuestion } from "src/models/question";
import type { TypeAnswer } from "src/models/answer";
import { MoveButton } from "src/components/move-button";
import { AnswerForm } from "src/components/answer-form";

type Props = {
  currentQuestionDataList: TypeQuestion[];
  answerDataList: TypeAnswer[];
};

export type TempUserAnswer = {
  questionId: number;
  answer: string;
};

export type TempOnlyAnswer = {
  questionId: number;
  answer: string;
};

export function Question({ currentQuestionDataList, answerDataList }: Props): JSX.Element {
  console.log("render------------------------------------------------------------------");
  const [pageNumber, changePageNumber] = useState<number>(1);
  console.log("pageNumber", pageNumber);
  const [userAnswers, setUserAnswers] = useState<TempUserAnswer[]>([]);
  console.log("userAnswers", userAnswers);
  const [onlyAnswer, setOnlyAnswer] = useState<TempOnlyAnswer>({ questionId: 0, answer: "" });
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
          setOnlyAnswer({
            questionId: userAnswers[pageNumber - 1].questionId,
            answer: userAnswers[pageNumber - 1].answer,
          });
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
  return (
    <div className="w-11/12 lg:w-10/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-auto my-12 dark:bg-gray-700">
      <div className="p-4 text-left lg:text-left">
        <h2 className="text-3xl font-bold pt-8 lg:pt-0">問題：{pageNumber}</h2>
        <p>{questionData.question}</p>
        <div className="mx-auto w-full pt-3 border-b-2 border-blue-500" />
        <AnswerForm
          questionData={questionData}
          answerDataList={answerDataList}
          setOnlyAnswer={setOnlyAnswer}
          setWordAnswer={setWordAnswer}
          pageNumber={pageNumber}
          onlyAnswer={onlyAnswer}
          wordAnswer={wordAnswer}
        />
        <MoveButton
          pageNumber={pageNumber}
          changePageNumber={changePageNumber}
          setUserAnswers={setUserAnswers}
          currentQuestionDataList={currentQuestionDataList}
          questionData={questionData}
          userAnswers={userAnswers}
          onlyAnswer={onlyAnswer}
          wordAnswer={wordAnswer}
        />
      </div>
    </div>
  );
}
