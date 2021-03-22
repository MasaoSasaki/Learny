import styles from "./index.module.scss";

type Props = { workCount: number };

export function LearningConfig({ workCount }: Props): JSX.Element {
  return (
    <div className="w-full lg:w-5/12 rounded-lg lg:rounded-l-lg shadow-2xl bg-white opacity-75 mx-4 my-12 dark:bg-gray-900">
      <div className="p-4 md:p-12 text-center lg:text-left dark:bg-gray-800">{workCount}</div>
    </div>
  );
}
