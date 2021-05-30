import { render } from "@testing-library/react";
import Learning from "src/pages/learning";
const { getQuestions } = require("test/__mocks__/questionsMock");

beforeAll(() => {
  require("whatwg-fetch");
});

describe("Learning page", () => {
  test("matches snapshot", async () => {
    const json = await getQuestions("http://localhost:3001/users/1/questions");
    const { asFragment } = render(<Learning resQuestionDataList={json} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

