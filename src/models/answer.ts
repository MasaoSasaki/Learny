export type TypeAnswer = {
  questionId: number;
  type: "checkbox" | "radio" | "text"
  options?: string[]
  answer: string;
};

export const EXAMPLE_ANSWER_LIST: TypeAnswer[] = [
  {
    type: "word",
    answer: "こくご",
  },
  {
    type: "word",
    answer: "すうがく",
  },
  {
    type: "checkbox",
    options: ["森羅万象", "熟語", "空前絶後", "四文字"],
    answer:["森羅万象", "空前絶後"]
  },
  {
    type: "checkbox",
    options: ["四季折", "一塁打", "平々凡々"],
    answer: ["四季折", "一塁打"]
  },
  {
    type: "radio",
    options: ["太宰治", "芥川龍之介", "村上春樹"],
    answer: "太宰治"
  },
  {
    type: "radio",
    options: ["ベートヴェン", "シューベルト", "バッハ"],
    answer: "ベートーヴェン",
  },
  {
    type: "word",
    answer: "2",
  },
].map((answer, index) => ({
  ...answer,
  questionId: index + 1
})) as TypeAnswer[];
