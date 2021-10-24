import React from 'react';
import './App.css';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { PageLayout } from './components/PageLayout';

function App() {
  return (
    <div className="App">
      <Header>
        <PageLayout>
          <p>This is the main app content!</p>
        </PageLayout>
      </Header>
      <HomePage />
    </div>
  );
}

export default App;
