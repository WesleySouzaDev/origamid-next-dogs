'use client';

import { User } from '@/actions/user-get';
import React from 'react';

type IUserContext = {
  user: User | null;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null)
    throw new Error('useUser deve ser usado dentro de um provedor');

  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = React.useState<User | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
