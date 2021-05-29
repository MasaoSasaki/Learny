import { TypeQuestionTypes, TypeQuestion } from "src/types/types";
import type { TypeUserAnswer } from "src/types/types";
import { timeStamp } from "src/utils/function";

type Props = {
  pageNumber: number;
  changePageNumber: Function;
  setUserAnswers: Function;
  questionDataList: TypeQuestion[];
  userAnswers: TypeUserAnswer[];
  setTmpAnswer: Function;
  tmpAnswer: string | string[];
};

// 問題移動時に回答を一時保存
export const MoveButton = ({
  changePageNumber,
  setUserAnswers,
  setTmpAnswer,
  pageNumber,
  userAnswers,
  tmpAnswer,
  questionDataList,
}: Props): JSX.Element => {
  console.log({tmpAnswer})
  const currentQuestion = questionDataList[pageNumber - 1];
  const movePage = (button: "prev" | "next") => {
    console.log(`stateの更新を開始します。-----------------------------------`);
    editUserAnswer();
    if (button === "prev") {
      setTmpAnswer(userAnswers[pageNumber - 2].tmpAnswer);
      changePageNumber(pageNumber - 1);
    } else if (button === "next") {
      setTmpAnswer(userAnswers[pageNumber].tmpAnswer);
      changePageNumber(pageNumber + 1);
    }
  };

  // 一時保存回答の更新
  const editUserAnswer = (): void => {
    const tmpUserAnswer: string | string[] = tmpAnswer;
    setUserAnswers(
      userAnswers.map((userAnswer) =>
        userAnswer.id === currentQuestion.id ? { ...userAnswer, tmpAnswer: tmpUserAnswer } : userAnswer
      )
    );
  };

  const submit = () => {
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
          onClick={() => movePage("prev")}
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
          onClick={() => movePage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
