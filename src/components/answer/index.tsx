type Props = {
  type: "mulch" | "only" | "keyword";
};

export function Answer({ type }: Props): JSX.Element {
  const form = () => {
    switch (type) {
      case "mulch":
        return (
          <>
            <input type="checkbox" className="my-4 block form-checkbox h-5 w-5 text-blue-600" />
            <input type="checkbox" className="my-4 block form-checkbox h-5 w-5 text-blue-600" />
          </>
        ); // TODO: 回答数に合わせて動的に変更
      case "only":
        return (
          <>
            <input type="radio" className="my-4 block form-radio h-5 w-5 text-blue-600" />
            <input type="radio" className="my-4 block form-radio h-5 w-5 text-blue-600" />
          </>
        ); // TODO: 回答数に合わせて動的に変更
      case "keyword":
        return (
          <input
            type="text"
            className="form-input h-full w-full border-gray-300 p-2 border-blue rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-1"
          />
        );
    }
  };
  return <div className="mt-4 px-4 py-8 bg-blue-50 shadow-inner border-white rounded-xl dark:bg-gray-800">{form()}</div>;
}
