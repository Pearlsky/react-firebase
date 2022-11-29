import { useRef, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../../config/auth-context";

export const SignUp = () => {
  const auth = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const signUpHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const authResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(authResult);
  };

  return (
    <form onSubmit={signUpHandler}>
      <label htmlFor="user-email">
        <input id="user-email" ref={emailRef}></input>
      </label>

      <label htmlFor="user-password">
        <input id="user-password" ref={passwordRef}></input>
      </label>

      <button type="submit"></button>
    </form>
  );
};


const SignUpPage = () => {
    return <SignUp />;
  };

export default SignUpPage;