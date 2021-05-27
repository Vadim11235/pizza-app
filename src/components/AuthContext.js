import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [authed, setAuthed] = useState(false)

  const logIn = () => setAuthed(true);
  const logOut = () => setAuthed(false);

  return (
    <AuthContext.Provider value={{authed, logIn, logOut}}>
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);