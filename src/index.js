import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//import Redux from "redux";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>axiosの勉強</h1>
        <button onClick={this.handleDo}>押したら出る</button>
      </div>
    );
  }
  handleDo = () => {
    const url = "https://developer.mozilla.org/ja/docs/Web/JavaScript";
    axios.get(url).then(res => {
      document.body.innerHTML = res.data;
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
