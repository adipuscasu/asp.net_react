import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
interface Props {
  children: React.ReactNode;
}
export const PageLayout = ({ children }: Props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <h5>
        <span>
          Welcome to the Microsoft Authentication Library For React Tutorial
        </span>
      </h5>
      <br />
      <br />
      {children}
    </>
  );
};
