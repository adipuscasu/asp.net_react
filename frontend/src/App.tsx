import React from 'react';
import './App.css';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { PageLayout } from './components/PageLayout';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react';
import { loginRequest } from './authConfig';
import Button from 'react-bootstrap/Button';
import { ProfileContent } from './components/ProfileContent';

function App() {
  return (
    <div className="App">
      <Header>
        <PageLayout>
          <p>This is the main app content!</p>
          <AuthenticatedTemplate>
            <ProfileContent />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
        </PageLayout>
      </Header>
      <HomePage />
    </div>
  );
}

export default App;
