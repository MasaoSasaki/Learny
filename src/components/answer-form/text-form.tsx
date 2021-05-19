type Props = {
  textAnswer: string;
  setTextAnswer: Function;
}

export const TextForm = ({ textAnswer, setTextAnswer }: Props): JSX.Element => {
  return (
    <input
      type="text"
      value={textAnswer}
      onChange={(e) => setTextAnswer(e.target.value)}
      className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
    />
  );
}