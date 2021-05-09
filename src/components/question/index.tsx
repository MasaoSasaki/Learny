import { useState, useEffect } from "react";
import type { TypeQuestion } from "src/models/question";
import type { TypeAnswer } from "src/models/answer";
import { MoveButton } from "src/components/move-button";
import { AnswerForm } from "src/components/answer-form";

type Props = {
  questionDataList: TypeQuestion[];
  answerDataList: TypeAnswer[];
};

export type UserAnswer = {
  questionId: number;
  answer: string | number[];
};

export function Question({ questionDataList, answerDataList }: Props): JSX.Element {
  console.log("render------------------------------------------------------------------");
  const [pageNumber, changePageNumber] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [textAnswer, setTextAnswer] = useState<string>("");
  const [checkboxAnswers, setCheckboxAnswers] = useState<string[]>([]);
  const [radioAnswer, setRadioAnswer] = useState<string>("");

  const questionData: TypeQuestion = questionDataList[pageNumber - 1];

  return (
    <div className="w-11/12 lg:w-10/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-auto my-12 dark:bg-gray-700">
      <div className="p-4 text-left lg:text-left">
        <h2 className="text-3xl font-bold pt-8 lg:pt-0">問題：{pageNumber}</h2>
        <p>{questionData.question}</p>
        <div className="mx-auto w-full pt-3 border-b-2 border-blue-500" />
        <AnswerForm
          pageNumber={pageNumber}
          questionData={questionData}
          answerDataList={answerDataList}
          setCheckboxAnswers={setCheckboxAnswers}
          setRadioAnswer={setRadioAnswer}
          setTextAnswer={setTextAnswer}
          checkboxAnswers={checkboxAnswers}
          radioAnswer={radioAnswer}
          textAnswer={textAnswer}
          userAnswers={userAnswers}
        />
        <MoveButton
          pageNumber={pageNumber}
          questionData={questionData}
          changePageNumber={changePageNumber}
          setUserAnswers={setUserAnswers}
          setCheckboxAnswers={setCheckboxAnswers}
          setRadioAnswer={setRadioAnswer}
          setTextAnswer={setTextAnswer}
          questionDataList={questionDataList}
          userAnswers={userAnswers}
          checkboxAnswers={checkboxAnswers}
          radioAnswer={radioAnswer}
          textAnswer={textAnswer}
        />
      </div>
    </div>
  );
}
