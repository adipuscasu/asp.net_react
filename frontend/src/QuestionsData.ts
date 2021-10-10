export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: Array<AnswerData>;
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const questions: Array<QuestionData> = [
  {
    questionId: 1,
    title: 'Why should I learn TypeScript?',
    content:
      ' TypeScript seems to be getting popular so I wondered whetherd it is worth my time learning it? What benefits does it give over JavaScript?',
    userName: 'Bob',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'To catch problems earlier speeding up your developments',
        userName: 'Jane',
        created: new Date(),
      },
      {
        answerId: 2,
        content: 'So, that you can use JavaScript features of tomorrow, today',
        userName: 'Fred',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: 'Which state management tool should I used?',
    content:
      'There seem to be a fair few state management tools around for React - React, Unstated, ... Which one should I use?',
    userName: 'Bob',
    created: new Date(),
    answers: [],
  },
];

export const getUnansweredQuestions = (): Array<QuestionData> => {
  return questions.filter((q) => q.answers.length === 0);
};
