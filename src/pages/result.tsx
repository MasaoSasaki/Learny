import { Layout } from "src/components/layout";
import { GetServerSideProps } from "next";
import { EXAMPLE_QUESTION_LIST } from "src/models/question";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

const theadItems: string[] = ["Id", "Question", "Status", "Show"];

export default function Result(): JSX.Element {
  const [modalWindow, isModalWindow] = useState(false);
  const showQuestionLength: number = 7;
  const cancelButtonRef = useRef(null);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="">
          <div className="p-2 align-middle inline-block w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-900">
                <thead className="bg-gray-50 dark:bg-gray-700">
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
                            <span className="cursor-pointer underline" onClick={()=>isModalWindow(true)}>
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
                        <Transition.Root show={modalWindow} as={Fragment}>
                          <Dialog
                            as="div"
                            static
                            className="fixed z-10 inset-0 overflow-y-auto"
                            initialFocus={cancelButtonRef}
                            open={modalWindow}
                            onClose={isModalWindow}
                          >
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-20 transition-opacity" />
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
                                <div className="inline-block align-bottom bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                      </div>
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                                          Deactivate account
                                        </Dialog.Title>
                                        <div className="mt-2">
                                          <p className="text-sm text-gray-500 dark:text-gray-200">
                                            Are you sure you want to deactivate your account? All of your data will be
                                            permanently removed. This action cannot be undone.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-700 px-4 py-3 sm:px-6 flex flex-row-reverse justify-around">
                                    <button
                                      type="button"
                                      className="w-2/5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => isModalWindow(false)}
                                    >
                                      Prev
                                    </button>
                                    <button
                                      type="button"
                                      className="w-2/5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => isModalWindow(false)}
                                      ref={cancelButtonRef}
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition.Root>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {};
