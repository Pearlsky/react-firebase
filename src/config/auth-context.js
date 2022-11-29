import { getAuth } from "firebase/auth";
import { firebase } from "./firebase";
import { createContext} from "react";

const auth = getAuth(firebase);

const AuthContext = createContext();

export const AuthProvider = (children) => {
  return <AuthContext value={auth}>{children}</AuthContext>;
};
