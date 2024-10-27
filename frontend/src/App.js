import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from './Pages/Homepage';
import { Chatpage } from './Pages/Chatpage';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/chats" component={Chatpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
