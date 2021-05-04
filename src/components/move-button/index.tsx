import { TypeQuestion } from "src/models/question";
import type { TempUserAnswer, TempWordAnswer } from "src/components/question";
import type { TempOnlyAnswer } from "src/components/question";

type Props = {
  pageNumber: number;
  changePageNumber: Function;
  setUserAnswers: Function;
  currentQuestionDataList: TypeQuestion[];
  questionData: TypeQuestion;
  userAnswers: TempUserAnswer[]
  onlyAnswer: TempOnlyAnswer
  wordAnswer: TempWordAnswer;
};

export const MoveButton = ({
  changePageNumber,
  setUserAnswers,
  pageNumber,
  userAnswers,
  onlyAnswer,
  wordAnswer,
  currentQuestionDataList,
  questionData,
}: Props): JSX.Element => {
  const movePage = (button: string) => {
    switch (questionData.type) {
      case "mulch":
        const tmpUserMulchAnswer: TempUserAnswer = {
          questionId: pageNumber,
          answer: "mulchQuestion",
        };
        !userAnswers[pageNumber - 1]
          ? setUserAnswers([...userAnswers, tmpUserMulchAnswer])
          : setUserAnswers(
              userAnswers.map((userAnswer) => (userAnswer.questionId === pageNumber ? tmpUserMulchAnswer : userAnswer))
            );
        break;
      case "only":
        !userAnswers[pageNumber - 1]
          ? setUserAnswers([...userAnswers, onlyAnswer])
          : setUserAnswers(
              userAnswers.map((userAnswer) => (userAnswer.questionId === pageNumber ? onlyAnswer : userAnswer))
            );
        break;
      case "word":
        !userAnswers[pageNumber - 1]
          ? setUserAnswers([...userAnswers, wordAnswer])
          : setUserAnswers(
              userAnswers.map((userAnswer) => (userAnswer.questionId === pageNumber ? wordAnswer : userAnswer))
            );
        break;
    }
    switch (button) {
      case "prev":
        if (pageNumber === 1) return;
        changePageNumber(pageNumber - 1);
        break;
      case "next":
        if (pageNumber === currentQuestionDataList.length) return;
        changePageNumber(pageNumber + 1);
        break;
    }
  };
  const submit = (): void => {
    alert("未回答があります。送信してよろしいですか？\n（未回答分は保存されません。）");
  };
  return (
    <div className="pt-12 pb-8 text-center">
      <div className="inline-flex">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            pageNumber === 1 && "hidden"
          }`}
          onClick={() => movePage("prev")}
        >
          Prev
        </button>
        <button
          className={`bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 ${
            pageNumber === 1 && "rounded-l"
          } ${pageNumber === currentQuestionDataList.length && "rounded-r"}`}
          onClick={() => submit()}
        >
          回答を送信する
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
            pageNumber === currentQuestionDataList.length && "hidden"
          }`}
          onClick={() => movePage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
