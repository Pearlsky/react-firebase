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
          <Route path={ROUTES.LANDING} component={<LandingPage />} />
          <Route path={ROUTES.SIGN_UP} component={<SignUpPage />} />
          <Route path={ROUTES.SIGN_IN} component={<SignInPage />} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={<PasswordForgetPage />}
          />
          <Route path={ROUTES.HOME} component={<HomePage />} />
          <Route path={ROUTES.ACCOUNT} component={<AccountPage />} />
          <Route path={ROUTES.ADMIN} component={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
