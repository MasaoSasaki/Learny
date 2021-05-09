import { TypeQuestion } from "src/models/question";
import { TypeAnswer } from "src/models/answer";
import type { UserAnswer } from "src/components/question";

type Props = {
  questionData: TypeQuestion & { questionId: number };
  answerDataList: TypeAnswer[];
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
  questionData,
  answerDataList,
  setCheckboxAnswers,
  setRadioAnswer,
  setTextAnswer,
  pageNumber,
  checkboxAnswers,
  radioAnswer,
  textAnswer,
  userAnswers,
}: Props): JSX.Element => {
  const form = () => {
    let options: string[] | undefined = answerDataList.filter(
      (answerData) => answerData.questionId === questionData.questionId
    )[0].options;
    switch (questionData.type) {
      case "checkbox":
        return (
          <>
            {(options as string[]).map((option, index) => {
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
      case "radio":
        return (
          <>
            {(options as string[]).map((option, index) => {
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
      case "text":
        return (
          <input
            type="text"
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
          />
        );
    }
  };
  return (
    <div className="mt-4 px-4 py-6 bg-blue-50 shadow-inner border-white rounded-xl dark:bg-gray-800">{form()}</div>
  );
};
