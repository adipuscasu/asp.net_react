import React from 'react';
import { UserIcon } from './Icons';

interface Props {
  children: React.ReactNode;
}

export const Header = ({ children }: Props) => (
  <div>
    <a href="./">Q & A</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <UserIcon />
      <span>Sign in</span>
    </a>
    <h2>{children}</h2>
  </div>
);
