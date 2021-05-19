import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import { TypeAnswer, TypeQuestion } from "src/types/types";
import { EXAMPLE_ANSWER_LIST } from "src/models/answer";

type Props = {
  modalWindow: boolean;
  isModalWindow: Function;
  cancelButtonRef: {
    current: null;
  };
  questionIndex: number;
  questionDataList: TypeQuestion[];
  setQuestionIndex: Function;
};

export const ResultModal = ({
  modalWindow,
  isModalWindow,
  cancelButtonRef,
  questionIndex,
  questionDataList,
  setQuestionIndex,
}: Props): JSX.Element => {
  const answer: TypeAnswer = EXAMPLE_ANSWER_LIST[questionIndex];
  const questionData: TypeQuestion = questionDataList[questionIndex];

  const answerOrOption = (): JSX.Element => {
    if (answer.options) {
      return (
        <td>
          {answer.options.map((option) => {
            return (
              <p>
                {answer.answer.includes(option) ? (
                  <CheckIcon className="w-5 h-5 pb-1 text-green-300 inline"></CheckIcon>
                ) : (
                  <CheckIcon className="w-5 h-5 pb-1 opacity-0 inline"></CheckIcon>
                )}
                {option}
              </p>
            );
          })}
        </td>
      );
    } else {
      return <p className="py-2">"{answer.answer}"</p>;
    }
  };

  const prevAndNextButton = (): JSX.Element => {
    return (
      <>
        <button
          type="button"
          className={`w-2/5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-400 text-base font-medium text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${
            questionIndex === 0 ? "hidden" : ""
          }`}
          onClick={() => setQuestionIndex(questionIndex - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          className={`w-2/5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-400 text-base font-medium text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${
            questionIndex === questionDataList.length - 1 ? "hidden" : ""
          }`}
          onClick={() => setQuestionIndex(questionIndex + 1)}
          ref={cancelButtonRef}
        >
          Next
        </button>
      </>
    );
  };

  return (
    <Transition.Root show={modalWindow} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={modalWindow}
        onClose={() => isModalWindow(false)}
      >
        <div className="flex justify-center pt-4 px-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="dark:bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-8 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <XIcon
                      className="h-12 opacity-30 font-normal fixed top-4 right-4 cursor-pointer"
                      onClick={() => isModalWindow(false)}
                    ></XIcon>
                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900 dark:text-gray-200">
                      問題{questionData.id}
                    </Dialog.Title>
                    <p className="text-left font-normal">{questionData.questions}</p>
                    <div className="mt-2">
                      <h3>解答</h3>
                      <p className="text-left font-normal text-gray-900 dark:text-gray-200">{answerOrOption()}</p>
                    </div>
                    <div className="mt-2">
                      <h3>解説</h3>
                      <p className="text-left font-normal text-sm text-gray-900 dark:text-gray-200">
                        {questionData.commentary}
                        うわあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dark:bg-gray-700 px-4 py-5 sm:px-6 flex justify-around">{prevAndNextButton()}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
