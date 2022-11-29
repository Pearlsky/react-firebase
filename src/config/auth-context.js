import { getAuth } from "firebase/auth";
import { firebase } from "./firebase";
import { createContext} from "react";

const auth = getAuth(firebase);

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
