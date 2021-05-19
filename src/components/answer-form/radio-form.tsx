import { TypeQuestion } from "src/types/types";

type Props = {
  currentQuestion: TypeQuestion;
  radioAnswer: string;
  setRadioAnswer: Function;
};

export const RadioForm = ({ currentQuestion, radioAnswer, setRadioAnswer }: Props): JSX.Element => {
  return (
    <>
      {(currentQuestion.options as string[]).map((option, index) => {
        return (
          <div className="m-3" key={index}>
            <label className="flex items-center">
              <input
                type="radio"
                name={`question${index}`}
                className="m-2 block form-radio h-5 w-5 text-blue-600"
                onChange={() => setRadioAnswer(option)}
                checked={radioAnswer === option}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};
