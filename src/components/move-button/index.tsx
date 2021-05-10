import { TypeQuestionTypes, TypeQuestion } from "src/types/types";
import type { UserAnswer } from "src/types/types";

type Props = {
  pageNumber: number;
  changePageNumber: Function;
  setUserAnswers: Function;
  setCheckboxAnswers: Function;
  setRadioAnswer: Function;
  setTextAnswer: Function;
  questionDataList: TypeQuestion[];
  questionData: TypeQuestion;
  userAnswers: UserAnswer[];
  checkboxAnswers: string[];
  radioAnswer: string;
  textAnswer: string;
};

export const MoveButton = ({
  changePageNumber,
  setUserAnswers,
  setCheckboxAnswers,
  setRadioAnswer,
  setTextAnswer,
  pageNumber,
  userAnswers,
  checkboxAnswers,
  radioAnswer,
  textAnswer,
  questionDataList,
  questionData,
}: Props): JSX.Element => {
  const movePage = (button: string, type: TypeQuestionTypes) => {
    console.log(`stateの更新を開始します。-----------------------------------`);
    // Prevが押された時の処理
    if (button === "prev") {
      if (type === "radio") {
        editRadioUserAnswer();
      } else if (type === "checkbox") {
        editCheckboxUserAnswer();
      } else if (type === "text") {
        editTextUserAnswer();
      }
      if (userAnswers[pageNumber - 2] === undefined) {
        setTextAnswer("");
        setRadioAnswer("");
        setCheckboxAnswers([]);
      } else {
        setTextAnswer(userAnswers[pageNumber - 2].answer);
        setRadioAnswer(userAnswers[pageNumber - 2].answer);
        setCheckboxAnswers(userAnswers[pageNumber - 2].answer);
      }
      changePageNumber(pageNumber - 1);
      // Nextが押されたた時の処理
    } else if (button === "next") {
      if (type === "radio") {
        editRadioUserAnswer();
      } else if (type === "checkbox") {
        editCheckboxUserAnswer();
      } else if (type === "text") {
        editTextUserAnswer();
      }
      if (userAnswers[pageNumber] === undefined) {
        setTextAnswer("");
        setRadioAnswer("");
        setCheckboxAnswers("");
      } else {
        setTextAnswer(userAnswers[pageNumber].answer);
        setRadioAnswer(userAnswers[pageNumber].answer);
        setCheckboxAnswers(userAnswers[pageNumber].answer);
      }
      changePageNumber(pageNumber + 1);
    }
    switch (questionData.type) {
      case "text":
        break;
    }
  };

  const editTextUserAnswer = (): void => {
    const tmpTextAnswer: {
      questionId: number;
      answer: string;
    } = {
      questionId: questionData.questionId,
      answer: textAnswer,
    };
    if (userAnswers[pageNumber - 1] === undefined) {
      setUserAnswers([...userAnswers, tmpTextAnswer]);
    } else {
      setUserAnswers(
        userAnswers.map((userAnswer) =>
          userAnswer.questionId === questionData.questionId ? tmpTextAnswer : userAnswer
        )
      );
    }
  };

  const editRadioUserAnswer = (): void => {
    const tmpRadioAnswer: {
      questionId: number;
      answer: string;
    } = {
      questionId: questionData.questionId,
      answer: radioAnswer,
    };
    if (userAnswers[pageNumber - 1] === undefined) {
      setUserAnswers([...userAnswers, tmpRadioAnswer]);
    } else {
      setUserAnswers(
        userAnswers.map((userAnswer) =>
          userAnswer.questionId === questionData.questionId ? tmpRadioAnswer : userAnswer
        )
      );
    }
  };

  const editCheckboxUserAnswer = (): void => {
    const tmpCheckboxAnswers: {
      questionId: number;
      answer: string[];
    } = {
      questionId: questionData.questionId,
      answer: checkboxAnswers,
    };
    if (userAnswers[pageNumber - 1] === undefined) {
      setUserAnswers([...userAnswers, tmpCheckboxAnswers]);
    } else {
      setUserAnswers(
        userAnswers.map((userAnswer) =>
          userAnswer.questionId === questionData.questionId ? tmpCheckboxAnswers : userAnswer
        )
      );
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
          onClick={() => movePage("prev", questionDataList[pageNumber - 1].type)}
        >
          Prev
        </button>
        <button
          className={`bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 ${
            pageNumber === 1 && "rounded-l"
          } ${pageNumber === questionDataList.length && "rounded-r"}`}
          onClick={() => submit()}
        >
          回答を送信する
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
            pageNumber === questionDataList.length && "hidden"
          }`}
          onClick={() => movePage("next", questionDataList[pageNumber - 1].type)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
