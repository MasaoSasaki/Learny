import { TypeQuestion } from "src/types/types";
import { TextForm } from "src/components/answer-form/text-form";
import { RadioForm } from "src/components/answer-form/radio-form";
import { CheckboxForm } from "src/components/answer-form/checkbox-form";

type Props = {
  currentQuestion: TypeQuestion;
  setTmpAnswer: Function;
  tmpAnswer: string | string[];
};

export const AnswerForm = ({ currentQuestion, setTmpAnswer, tmpAnswer }: Props): JSX.Element => {
  const form = (): JSX.Element => {
    switch (currentQuestion.question_type) {
      case "checkbox": {
        return <CheckboxForm currentQuestion={currentQuestion} setTmpAnswer={setTmpAnswer} tmpAnswer={tmpAnswer} />;
      }
      case "radio": {
        if (typeof tmpAnswer === "string") {
          return <RadioForm currentQuestion={currentQuestion} tmpAnswer={tmpAnswer} setTmpAnswer={setTmpAnswer} />;
        } else {
          return <></>;
        }
      }
      case "text": {
        if (typeof tmpAnswer === "string") {
          return <TextForm tmpAnswer={tmpAnswer} setTmpAnswer={setTmpAnswer} />;
        } else {
          return <></>;
        }
      }
    }
  };
  
  return (
    <div className="mt-4 px-4 py-6 bg-blue-50 shadow-inner border-white rounded-xl dark:bg-gray-800">{form()}</div>
  );
};
