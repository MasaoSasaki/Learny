import { render } from "@testing-library/react";
import Mypage from "src/pages/mypage";
const { getUsers } = require("test/__mocks__/userMock");
const { getQuestions } = require("test/__mocks__/questionMock");

beforeAll(() => {
  require("whatwg-fetch");
});

describe("Mypage page", () => {
  test("matches snapshot", async () => {
    const userJson = await getUsers("http://localhost:3001/users/1");
    const questionJson = await getQuestions("http://localhost:3001/users/1/questions");
    const { asFragment } = render(<Mypage questionCount={questionJson.length} name={userJson.name} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
