export type UserAnswer = {
  questionId: number;
  answer: string | number[];
};

export type TypeAnswer = {
  questionId: number;
  type: "checkbox" | "radio" | "text";
  options?: string[];
  answer: string;
};

export type TypeQuestionTypes = "checkbox" | "radio" | "text";
export type TypeQuestion = {
  questionId: number;
  userId: number;
  work: string;
  question: string;
  type: TypeQuestionTypes;
};

export type UserList = {
  id: number;
  name: string;
  twitter: string;
  facebook: string;
  instagram: string;
};