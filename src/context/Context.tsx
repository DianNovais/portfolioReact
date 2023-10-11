import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";

export interface DataContextInterface {
    themeDark: boolean,
    setThemeDark: Dispatch<SetStateAction<boolean>>

}

const defaultState = {
    themeDark: false,
    setThemeDark: (user: boolean) => {}
} as DataContextInterface;

export const DataContext = createContext(defaultState);

interface IAuthProviderProp {
    children: ReactNode
}

const DataProvider: FC<IAuthProviderProp> = ({ children }) => {
  const [themeDark, setThemeDark] = useState<boolean>(false);

  const value = {
    themeDark,
    setThemeDark
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;