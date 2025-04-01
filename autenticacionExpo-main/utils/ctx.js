import { useContext, createContext } from "react";
import { useStorageState } from "./useStorageState";
import axios from "axios";
const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});
import * as SecureStore from "expo-secure-store";

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }) {
  const [[isLoading, session], setSession] = useStorageState("session_token");

  return (
    <AuthContext.Provider
      value={{
        signIn: async (username, password) => {
          // Perform sign-in logic here
          try {
            const auth = await axios.post(
              "https://normal-tightly-shiner.ngrok-free.app/auth",
              {
                username,
                password,
              }
            );

            if (auth) {
              console.log("SAVE TOKEN:" + auth.data.data.token)
              console.log(auth.data.data.token);
              // setSession(auth.data.data.token);
              await SecureStore.setItemAsync('session_token', auth.data.data.token);
              return true;
            }

            return false;
          } catch (error) {
            console.log(error);
            return false;
          }
          /*
          if(user === 'admin' && pass === 'admin') {
            setSession('token');
            return true
          }
          return false
          */
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
