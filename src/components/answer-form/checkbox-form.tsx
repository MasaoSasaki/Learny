import { TypeQuestion } from "src/types/types";

type Props = {
  currentQuestion: TypeQuestion;
  setTmpAnswer: Function;
  tmpAnswer: string | string[];
};

export const CheckboxForm = ({
  currentQuestion,
  setTmpAnswer,
  tmpAnswer,
}: Props): JSX.Element => {
  return (
    <>
      {(currentQuestion.options as string[]).map((option, index) => {
        return (
          <div className="m-3" key={index}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="m-2 form-checkbox h-5 w-5"
                onChange={() => {
                  if (tmpAnswer.includes(option)) {
                    setTmpAnswer((tmpAnswer as string[]).filter((answer) => answer !== option));
                  } else {
                    setTmpAnswer([...(tmpAnswer as string[]), option]);
                  }
                }}
                checked={tmpAnswer.includes(option)}
              />
              
              <span className="ml-2">{option}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};
