import {createContext, ReactNode, useEffect, useState} from 'react';

// STORAGE
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '@storage/user/storageUser';
import {
  storageAuthTokenSave,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from '@storage/storageAuthToken';

// SERVICES
import {api} from '@services/api';

// TYPES
import {User} from '@shared/types/userTypes';

export type AuthContextDataProps = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate(userData: User, token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setUser(userData);
  }

  async function storageUserAndToken(userData: User, token: string) {
    try {
      setIsLoadingUserStorageData(true);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await storageUserSave(userData);
      await storageAuthTokenSave(token);
      setUser(userData);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const {data} = await api.post('/login-user', {email, password});
      console.log(data);

      // if (data.user && data.token) {
      //   await storageUserAndToken(data.user, data.token);
      //   userAndTokenUpdate(data.user, data.token);
      // }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as User);
      await storageAuthTokenRemove();
      await storageUserRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{user, signIn, signOut, isLoadingUserStorageData}}>
      {children}
    </AuthContext.Provider>
  );
}
