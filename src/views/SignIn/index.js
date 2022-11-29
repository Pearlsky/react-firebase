import { useRef, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../../config/auth-context";

export const SignIn = () => {
  const auth = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const authResult = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(authResult);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <form onSubmit={signInHandler}>
      <div>
        <label htmlFor="user-email">
          <input id="user-email" ref={emailRef}></input>
        </label>
      </div>
      <div>
        <label htmlFor="user-password">
          <input id="user-password" ref={passwordRef}></input>
        </label>
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;