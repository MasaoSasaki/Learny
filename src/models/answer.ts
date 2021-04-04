export type AnswerList = {
  id: string;
  workId: string;
  answer: string;
  right: boolean;
};

export const EXAMPLE_ANSWER_LIST: AnswerList[] = [
  {
    id: "1",
    workId: "1",
    answer: "こくご",
    right: true
  },
  {
    id: "2",
    workId: "2",
    answer: "森羅万象",
    right: true
  },
  {
    id: "3",
    workId: "2",
    answer: "熟語",
    right: false
  },
  {
    id: "8",
    workId: "2",
    answer: "空前絶後",
    right: true
  },
  {
    id: "4",
    workId: "2",
    answer: "四文字",
    right: false
  },
  {
    id: "5",
    workId: "3",
    answer: "太宰治",
    right: true
  },
  {
    id: "6",
    workId: "3",
    answer: "芥川龍之介",
    right: false
  },
  {
    id: "7",
    workId: "4",
    answer: "村上春樹",
    right: false
  },
];
