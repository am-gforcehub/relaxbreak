import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import AdminQuestions from "./pages/admin/Questions";
import AdminAnswers from "./pages/admin/Answers";
import Quiz from "./pages/Quiz/index";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/admin/questions" component={AdminQuestions} />
          <Route exact path="/admin/questions/:id" component={AdminAnswers} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
