import { createContext, useState } from "react";

const LoginContext = createContext<LogginProps>({ setUser: () => {} });

interface userProps {
  user: {
    id: number;
    pseudo: string;
    email: string;
    inscription_date: string;
    profile_picture: string;
  };
  token: string;
}

interface LogginProps {
  user?: userProps;
  setUser: React.Dispatch<React.SetStateAction<undefined>>;
}

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState();
  console.info(user);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
