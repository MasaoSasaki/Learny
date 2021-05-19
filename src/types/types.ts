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
  user_id: number;
  work: string;
  questions: string;
  question_type: TypeQuestionTypes;
  commentary: string;
  options: string[] | null;
  answer: string | string[];
};

export type UserList = {
  id: number;
  name: string;
  twitter: string;
  facebook: string;
  instagram: string;
};
