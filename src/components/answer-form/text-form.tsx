type Props = {
  tmpAnswer: string;
  setTmpAnswer: Function;
}

export const TextForm = ({ tmpAnswer, setTmpAnswer }: Props): JSX.Element => {
  return (
    <input
      type="text"
      value={tmpAnswer}
      onChange={(e) => setTmpAnswer(e.target.value)}
      className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
    />
  );
}