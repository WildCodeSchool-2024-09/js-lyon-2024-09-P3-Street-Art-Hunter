import { createContext, useState } from "react";

const LoginContext = createContext<LogginProps>({ setUser: () => {} });

interface userProps {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  inscription_date: string;
}

interface LogginProps {
  user?: userProps;
  setUser: React.Dispatch<React.SetStateAction<undefined>>;
}

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState();
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
