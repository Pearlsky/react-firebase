import { useRef, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../../config/auth-context";

export const SignUp = () => {
  const auth = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const authResult = await createUserWithEmailAndPassword(
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
    <form onSubmit={signUpHandler}>
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

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
