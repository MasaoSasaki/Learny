import type {TypeQuestion} from "src/types/types"

export const EXAMPLE_QUESTION_LIST: TypeQuestion[] = [
  {
    userId: 1,
    work: "国語",
    question: '"国語"この漢字の読み方は？（ひらがな3文字）',
    type: "text",
  },
  {
    userId: 1,
    work: "国語",
    question: '"数学"この漢字の読み方は？（ひらがな4文字）',
    type: "text",
  },
  {
    userId: 1,
    work: "国語",
    question: "四文字熟語を選択してください。",
    type: "checkbox",
  },
  {
    userId: 1,
    work: "国語",
    question: "三文字熟語を選択してください。",
    type: "checkbox",
  },
  {
    userId: 1,
    work: "国語",
    question: '"走れメロス"の作者は誰ですか？',
    type: "radio",
  },
  {
    userId: 1,
    work: "音楽",
    question: '"運命"の作者は誰ですか？',
    type: "radio",
  },
  {
    userId: 1,
    work: "数学",
    question: "1+1=?",
    type: "text",
  },
].map((question, index) => ({
  ...question,
  questionId: index + 1,
})) as TypeQuestion[];
