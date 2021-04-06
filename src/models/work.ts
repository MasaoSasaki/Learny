export type WorkList = {
  id: number,
  userId: number,
  workBook: string,
  question: string,
  type: 'mulch' | 'only' | 'keyword'
}

export const EXAMPLE_WORK_LIST: WorkList[] = [
  {
    id: 1,
    userId: 1,
    workBook: '国語',
    question: '"国語"この漢字の読み方は？（ひらがな3文字）',
    type: 'keyword',
  },
  {
    id: 2,
    userId: 1,
    workBook: '国語',
    question: '四文字熟語を選択してください。',
    type: 'mulch',
  },
  {
    id: 3,
    userId: 1,
    workBook: '国語',
    question: '"走れメロス"の作者は誰ですか？',
    type: 'only',
  },
  {
    id: 4,
    userId: 2,
    workBook: '音楽',
    question: '"運命"の作者は誰ですか？',
    type: 'only',
  },
  {
    id: 5,
    userId: 3,
    workBook: '数学',
    question: '1+1',
    type: 'keyword',
  }
]
