import { Layout } from "src/components/layout";
import { EXAMPLE_QUESTION_LIST } from "src/models/question";
import { useRef, useState } from "react";
import { ResultModal } from "src/components/modals/result-modal";

const theadItems: string[] = ["Id", "Question", "Status", "Show"];

export default function Result(): JSX.Element {
  const [modalWindow, isModalWindow] = useState(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const showQuestionLength: number = 7;
  const cancelButtonRef = useRef(null);

  const openModalWindow = (index: number) => {
    setQuestionIndex(index);
    isModalWindow(true);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="p-2 align-middle inline-block w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden">
            <h2 className="text-center">解答結果</h2>
            <ul>
              <li>問題数：7</li>
              <li>正答率：100.0%</li>
            </ul>
            <table className="mb-10 min-w-full divide-y divide-gray-200 dark:divide-gray-900 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700  rounded-lg">
                <tr>
                  {theadItems.map((item, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider ${
                          item === "Show" ? "hidden sm:block" : ""
                        }`}
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-700">
                {EXAMPLE_QUESTION_LIST.map((questionData, index) => {
                  return (
                    <tr
                      key={index}
                      className={`border-gray-300 dark:border-gray-600 ${
                        EXAMPLE_QUESTION_LIST.length !== index + 1 ? "border-b" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-300">{index + 1}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-gray-300">
                          <span className="cursor-pointer underline" onClick={() => openModalWindow(index)}>
                            {questionData.question.length >= showQuestionLength
                              ? `${questionData.question.substr(0, showQuestionLength)}...`
                              : questionData.question}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-green-900 dark:bg-green-900 dark:text-green-400">
                          正解
                        </span>
                        {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-400">
                        部分的正解
                      </span> */}
                        {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-red-900 dark:bg-red-900 dark:text-red-300">
                        不正解
                      </span> */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 hidden sm:block">
                        解答
                      </td>
                    </tr>
                  );
                })}
                <ResultModal
                  modalWindow={modalWindow}
                  isModalWindow={isModalWindow}
                  cancelButtonRef={cancelButtonRef}
                  questionIndex={questionIndex}
                  questionDataList={EXAMPLE_QUESTION_LIST}
                  setQuestionIndex={setQuestionIndex}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {};
