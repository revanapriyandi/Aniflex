import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { selectCurrentUser } from "./redux/auth/auth.selectors";
import { checkUserSession } from "./redux/auth/auth.actions";
import PageSignIn from "./pages/Auth/PageSignIn";
import PageSignUp from "./pages/Auth/PageSignUp";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      {" "}
      {currentUser && (
        <>
          <Navbar />
        </>
      )}{" "}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <PageSignIn />)}
          />{" "}
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <PageSignUp />)}
          />{" "}
          <Route path="*">
            <Redirect to="/" />
          </Route>{" "}
        </Switch>
      </AnimatePresence>{" "}
    </div>
  );
};

export default App;
