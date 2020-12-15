import logo from './logo.svg';
import './App.css';
import { Layout } from "./Layout"
import { Provider } from "react-redux"
import { Router, Switch } from "react-router-dom"
import history from "./Services/history"
import store from "./configs/configureStore"
import Routes from "./routes"
function App() {
  return (
      <Provider store={store}>
          <Router history={history}>
              <Routes />
          </Router>
      </Provider>
 /*   <div className="App">
      <Layout />
    </div>*/
  );
}

export default App;
