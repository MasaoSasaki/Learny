import { TypeQuestion } from "src/types/types";

type Props = {
  currentQuestion: TypeQuestion;
  checkboxAnswers: string[];
  setCheckboxAnswers: Function;
}

export const CheckboxForm = ({currentQuestion, checkboxAnswers, setCheckboxAnswers}:Props): JSX.Element => {
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
                  checkboxAnswers.includes(option)
                    ? setCheckboxAnswers(checkboxAnswers.filter((checkboxAnswer) => checkboxAnswer !== option))
                    : setCheckboxAnswers([...checkboxAnswers, option]);
                }}
                checked={checkboxAnswers.includes(option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        );
      })}
    </>
  );
}