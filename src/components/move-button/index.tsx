import { TypeQuestionTypes, TypeQuestion } from "src/types/types";
import type { UserAnswer } from "src/types/types";
import { timeStamp } from "src/utils/function";

type Props = {
  pageNumber: number;
  changePageNumber: Function;
  setUserAnswers: Function;
  questionDataList: TypeQuestion[];
  userAnswers: UserAnswer[];
  checkboxAnswers: string[];
  setCheckboxAnswers: Function;
  radioAnswer: string;
  setRadioAnswer: Function;
  textAnswer: string;
  setTextAnswer: Function;
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
}: Props): JSX.Element => {
  const currentQuestion: TypeQuestion = questionDataList[pageNumber - 1];
  const movePage = (button: string, type: TypeQuestionTypes) => {
    console.log(`stateの更新を開始します。-----------------------------------`);
    // Prevが押された時の処理
    editUserAnswer(type);
    if (button === "prev") {
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
  };

  const editUserAnswer = (type: TypeQuestionTypes): void => {
    switch (type) {
      case "radio": {
        editRadioUserAnswer();
        break;
      }
      case "checkbox": {
        editCheckboxUserAnswer();
        break;
      }
      case "text": {
        editTextUserAnswer();
        break;
      }
    }
  };

  const editTextUserAnswer = (): void => {
    const tmpTextAnswer: {
      questionId: number;
      answer: string;
    } = {
      questionId: currentQuestion.id,
      answer: textAnswer,
    };
    if (userAnswers[pageNumber - 1] === undefined) {
      setUserAnswers([...userAnswers, tmpTextAnswer]);
    } else {
      setUserAnswers(
        userAnswers.map((userAnswer) => (userAnswer.questionId === currentQuestion.id ? tmpTextAnswer : userAnswer))
      );
    }
  };

  const editRadioUserAnswer = (): void => {
    const tmpRadioAnswer: {
      questionId: number;
      answer: string;
    } = {
      questionId: currentQuestion.id,
      answer: radioAnswer,
    };
    if (userAnswers[pageNumber - 1] === undefined) {
      setUserAnswers([...userAnswers, tmpRadioAnswer]);
    } else {
      setUserAnswers(
        userAnswers.map((userAnswer) => (userAnswer.questionId === currentQuestion.id ? tmpRadioAnswer : userAnswer))
      );
    }
  };

  const editCheckboxUserAnswer = (): void => {
    const tmpCheckboxAnswers: {
      questionId: number;
      answer: string[];
    } = {
      questionId: currentQuestion.id,
      answer: checkboxAnswers,
    };
    if (userAnswers[pageNumber - 1] === undefined) {
      setUserAnswers([...userAnswers, tmpCheckboxAnswers]);
    } else {
      setUserAnswers(
        userAnswers.map((userAnswer) => (userAnswer.questionId === currentQuestion.id ? tmpCheckboxAnswers : userAnswer))
      );
    }
  };

  const submit = (type: TypeQuestionTypes) => {
    // editUserAnswer(type);
    // console.log(userAnswers);
    // const message: string =
    //   userAnswers.length === questionDataList.length
    //     ? "回答を送信します。よろしいですか？"
    //     : "未回答があります。送信してよろしいですか？\n（未回答分は保存されません。）";
    if (confirm("message")) {
      // fetch("http://localhost:3001/users", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name: "noname", created_at: timeStamp() }),
      // })
      //   .then((response) => console.log(response.json()))
      //   .then((data) => console.log({ data }))
      //   .catch((error) => console.log({ error }));
    }
    // console.log(userAnswers);
  };

  return (
    <div className="pt-12 pb-8 text-center">
      <div className="inline-flex">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            pageNumber === 1 && "hidden"
          }`}
          onClick={() => movePage("prev", currentQuestion.question_type)}
        >
          Prev
        </button>
        <button
          className={`bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 ${
            pageNumber === 1 && "rounded-l"
          } ${pageNumber === questionDataList.length && "rounded-r"}`}
          onClick={() => submit(currentQuestion.question_type)}
        >
          回答を送信する
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
            pageNumber === questionDataList.length && "hidden"
          }`}
          onClick={() => movePage("next", currentQuestion.question_type)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
