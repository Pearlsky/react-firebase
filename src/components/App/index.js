import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import Navigation from "../Navigation";
import LandingPage from "../../views/Landing";
import SignUpPage from "../../views/SignUp";
import SignInPage from "../../views/SignIn";
import PasswordForgetPage from "../../views/PasswordForget";
import HomePage from "../../views/Home";
import AccountPage from "../../views/Account";
import AdminPage from "../../views/Admin";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />

        <Routes>
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            element={<PasswordForgetPage />}
          />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
