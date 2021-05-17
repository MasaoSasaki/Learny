export type UserAnswer = {
  questionId: number;
  answer: string | number[];
};

export type TypeQuestionTypes = "checkbox" | "radio" | "text";
export type TypeAnswer = {
  questionId: number;
  type: TypeQuestionTypes;
  options?: string[];
  answer: string;
};

export type TypeQuestion = {
  id: number;
  userId: number;
  work: string;
  question: string;
  type: TypeQuestionTypes;
  commentary: string;
};

export type UserList = {
  id: number;
  name: string;
  twitter: string;
  facebook: string;
  instagram: string;
};
