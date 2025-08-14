import { createContext, type Dispatch, type PropsWithChildren, type SetStateAction, useState } from "react";

export const ProfileContext = createContext<{name:string,setName:Dispatch<SetStateAction<string>> }>({name:"",setName:() => {}});

export const ProfileProvider = ({children}:PropsWithChildren) => {
  const [name,setName] = useState<string>("Ekpaliguidime Socrates")
  return <ProfileContext.Provider value={{ name,setName }}>{children}</ProfileContext.Provider>
}