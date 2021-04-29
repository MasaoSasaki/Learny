export type TypeQuestion = {
  id: number,
  userId: number,
  work: string,
  question: string,
  type: 'mulch' | 'only' | 'word'
}

export const EXAMPLE_QUESTION_LIST: TypeQuestion[] = [
  {
    id: 1,
    userId: 1,
    work: '国語',
    question: '"国語"この漢字の読み方は？（ひらがな3文字）',
    type: 'word',
  },
  {
    id: 6,
    userId: 1,
    work: '国語',
    question: '"数学"この漢字の読み方は？（ひらがな4文字）',
    type: 'word',
  },
  {
    id: 2,
    userId: 1,
    work: '国語',
    question: '四文字熟語を選択してください。',
    type: 'mulch',
  },
  {
    id: 3,
    userId: 1,
    work: '国語',
    question: '"走れメロス"の作者は誰ですか？',
    type: 'only',
  },
  {
    id: 4,
    userId: 1,
    work: '音楽',
    question: '"運命"の作者は誰ですか？',
    type: 'only',
  },
  {
    id: 5,
    userId: 3,
    work: '数学',
    question: '1+1',
    type: 'word',
  }
]
