import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questonsLoading, setQuestionsLoading] = React.useState(true);
  // React.useEffect(async () => {
  //   console.log('first rendered');
  //   const doGetUnansweredQuestions = async () => {
  //     const unansweredQuestions = await getUnansweredQuestions();
  //     setQuestions(unansweredQuestions);
  //     setQuestionsLoading(false);
  //   };
  //   doGetUnansweredQuestions();
  // }, []);

  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button>Ask a question</button>
      </div>
      {/* <QuestionList data={getUnansweredQuestions()} /> */}
    </Page>
  );
};
