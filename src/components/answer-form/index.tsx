import { TypeQuestion } from "src/types/types";
import type { UserAnswer } from "src/types/types";
import { TextForm } from "src/components/answer-form/text-form";
import { RadioForm } from "src/components/answer-form/radio-form";
import { CheckboxForm } from "src/components/answer-form/checkbox-form";

type Props = {
  currentQuestion: TypeQuestion;
  setCheckboxAnswers: Function;
  setRadioAnswer: Function;
  setTextAnswer: Function;
  pageNumber: number;
  checkboxAnswers: string[];
  radioAnswer: string;
  textAnswer: string;
  userAnswers: UserAnswer[];
};

export const AnswerForm = ({
  currentQuestion,
  setCheckboxAnswers,
  setRadioAnswer,
  setTextAnswer,
  checkboxAnswers,
  radioAnswer,
  textAnswer,
}: Props): JSX.Element => {
  const form = (): JSX.Element => {
    switch (currentQuestion.question_type) {
      case "checkbox":
        return (
          <CheckboxForm
            currentQuestion={currentQuestion}
            checkboxAnswers={checkboxAnswers}
            setCheckboxAnswers={setCheckboxAnswers}
          />
        );
      case "radio":
        return (
          <RadioForm currentQuestion={currentQuestion} radioAnswer={radioAnswer} setRadioAnswer={setRadioAnswer} />
        );
      case "text":
        return <TextForm textAnswer={textAnswer} setTextAnswer={setTextAnswer} />;
    }
  };
  return (
    <div className="mt-4 px-4 py-6 bg-blue-50 shadow-inner border-white rounded-xl dark:bg-gray-800">{form()}</div>
  );
};
