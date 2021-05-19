import type { TypeQuestion } from "src/types/types";

export const EXAMPLE_QUESTION_LIST: TypeQuestion[] = [
  {
    userId: 1,
    work: "国語",
    question: '"国語"この漢字の読み方は？（ひらがな3文字）',
    type: "text",
    commentary: "この漢字は'こくご'と読みます。日本語です。",
  },
  {
    userId: 1,
    work: "国語",
    question: '"数学"この漢字の読み方は？（ひらがな4文字）',
    type: "text",
    commentary: "この漢字は'すうがく'と読みます。日本語です。",
  },
  {
    userId: 1,
    work: "国語",
    question: "四文字熟語を選択してください。",
    type: "checkbox",
    commentary: "4文字熟語は漢字4文字で表される熟語",
  },
  {
    userId: 1,
    work: "国語",
    question: "三文字熟語を選択してください。",
    type: "checkbox",
    commentary: "3文字熟語は漢字3文字で表される熟語",
  },
  {
    userId: 1,
    work: "国語",
    question: '"走れメロス"の作者は誰ですか？',
    type: "radio",
    commentary: "走れメロスの作者は太宰治氏です。",
  },
  {
    userId: 1,
    work: "音楽",
    question: '"運命"の作者は誰ですか？',
    type: "radio",
    commentary: "運命はベートヴェンが作曲しました。他の選択肢は〇〇は〇〇が代表曲になります。",
  },
  {
    userId: 1,
    work: "数学",
    question: "1+1=?",
    type: "text",
    commentary: "足し算です。答えは2。他1-1=0 1x1=1 1÷1=1です。",
  },
].map((question, index) => ({
  ...question,
  id: index + 1,
})) as TypeQuestion[];
