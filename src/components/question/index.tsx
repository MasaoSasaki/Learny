import { useState } from "react";
import type { TypeQuestion } from "src/types/types";
import { MoveButton } from "src/components/move-button";
import { AnswerForm } from "src/components/answer-form";
import type { UserAnswer } from "src/types/types";

type Props = {
  questionDataList: TypeQuestion[];
};

export function Question({questionDataList}:Props ): JSX.Element {
  console.log("render------------------------------------------------------------------");
  const [pageNumber, changePageNumber] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [textAnswer, setTextAnswer] = useState<string>("");
  const [checkboxAnswers, setCheckboxAnswers] = useState<string[]>([]);
  const [radioAnswer, setRadioAnswer] = useState<string>("");
  const currentQuestion: TypeQuestion = questionDataList[pageNumber - 1];

  return (
    <div className="w-11/12 lg:w-10/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-auto my-12 dark:bg-gray-700 transition-all">
      <div className="p-4 text-left lg:text-left">
        <h2 className="text-3xl font-bold pt-8 lg:pt-0">問題：{pageNumber}</h2>
        <p>{currentQuestion.questions}</p>
        <div className="mx-auto w-full pt-3 border-b-2 border-blue-500" />
        <AnswerForm
          pageNumber={pageNumber}
          currentQuestion={currentQuestion}
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
          changePageNumber={changePageNumber}
          setUserAnswers={setUserAnswers}
          questionDataList={questionDataList}
          userAnswers={userAnswers}
          checkboxAnswers={checkboxAnswers}
          setCheckboxAnswers={setCheckboxAnswers}
          radioAnswer={radioAnswer}
          setRadioAnswer={setRadioAnswer}
          textAnswer={textAnswer}
          setTextAnswer={setTextAnswer}
        />
      </div>
    </div>
  );
}
