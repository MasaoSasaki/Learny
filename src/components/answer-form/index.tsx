import { TypeQuestion } from "src/models/question";
import { TypeAnswer } from "src/models/answer";
import { TempOnlyAnswer, TempWordAnswer } from "src/components/question";

type Props = {
  questionData: TypeQuestion;
  answerDataList: TypeAnswer[];
  setOnlyAnswer: Function;
  setWordAnswer: Function;
  pageNumber: number;
  onlyAnswer: TempOnlyAnswer;
  wordAnswer: TempWordAnswer;
};

export const AnswerForm = ({
  questionData,
  answerDataList,
  setOnlyAnswer,
  setWordAnswer,
  pageNumber,
  onlyAnswer,
  wordAnswer,
}: Props): JSX.Element => {
  const form = () => {
    switch (questionData.type) {
      case "mulch":
        return (
          <>
            {answerDataList.map(({ questionId, answer }, index) => {
              if (questionId !== questionData.id) return;
              return (
                <div className="m-3" key={index}>
                  <label className="flex items-center">
                    <input type="checkbox" className="m-2 form-checkbox h-5 w-5" />
                    <span className="ml-2">{answer}</span>
                  </label>
                </div>
              );
            })}
          </>
        );
      case "only":
        return (
          <>
            {answerDataList.map(({ questionId, answer }, index) => {
              if (questionId !== questionData.id) return;
              return (
                <div className="m-3" key={index}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question${questionData.id}`}
                      className="m-2 block form-radio h-5 w-5 text-blue-600"
                      onChange={() => setOnlyAnswer({ questionId: pageNumber, answer: answer })}
                      checked={onlyAnswer.questionId === pageNumber && onlyAnswer.answer === answer}
                    />
                    <span className="ml-2">{answer}</span>
                  </label>
                </div>
              );
            })}
          </>
        );
      case "word":
        return (
          <input
            type="text"
            value={wordAnswer.answer}
            onChange={(e) => setWordAnswer({ questionId: pageNumber, answer: e.target.value })}
            className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
          />
        );
    }
  };
  return (
    <div className="mt-4 px-4 py-6 bg-blue-50 shadow-inner border-white rounded-xl dark:bg-gray-800">{form()}</div>
  );
};
