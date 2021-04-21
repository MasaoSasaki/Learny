export type TypeAnswer = {
  id: number;
  questionId: number;
  answer: string;
  right: boolean;
};

export const EXAMPLE_ANSWER_LIST: TypeAnswer[] = [
  {
    id: 1,
    questionId: 1,
    answer: "こくご",
    right: true
  },
  {
    id: 2,
    questionId: 2,
    answer: "森羅万象",
    right: true
  },
  {
    id: 3,
    questionId: 2,
    answer: "熟語",
    right: false
  },
  {
    id: 8,
    questionId: 2,
    answer: "空前絶後",
    right: true
  },
  {
    id: 4,
    questionId: 2,
    answer: "四文字",
    right: false
  },
  {
    id: 5,
    questionId: 3,
    answer: "太宰治",
    right: true
  },
  {
    id: 6,
    questionId: 3,
    answer: "芥川龍之介",
    right: false
  },
  {
    id: 7,
    questionId: 4,
    answer: "村上春樹",
    right: false
  },
];
