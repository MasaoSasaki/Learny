import { TypeQuestion } from "src/types/types";

type Props = {
  currentQuestion: TypeQuestion;
  tmpAnswer: string;
  setTmpAnswer: Function;
};

export const RadioForm = ({ currentQuestion, tmpAnswer, setTmpAnswer }: Props): JSX.Element => {
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
                onChange={() => setTmpAnswer(option)}
                checked={tmpAnswer === option}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};
