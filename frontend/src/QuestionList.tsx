import React from 'react';
import { QuestionData } from './QuestionsData';
import { Question } from './Question';

interface Props {
  data: Array<QuestionData>;
}

export const QuestionList = ({ data }: Props) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        <Question data={question} />
      </li>
    ))}
  </ul>
);
