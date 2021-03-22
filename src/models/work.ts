export type ListWork = {
  id: number,
  workBook: string,
  question: string,
  type: 'mulch' | 'only' | 'keyword'
}

export const EXAMPLE_WORK_LIST: ListWork[] = [
  {
    id: 1,
    workBook: '国語',
    question: '"国語"この漢字の読み方は？（ひらがな3文字）',
    type: 'keyword',
  }
]
