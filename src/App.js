import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ducks/store";
import Charts from "./components/Charts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Charts />
        </div>
      </Provider>
    );
  }
}

export default App;
