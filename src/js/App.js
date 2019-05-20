import React from "react";
// import ReactDOM from "react-dom";

const appName = 'Hello from';

// NOTE: function call
// function App(props) {
//   return (
//     <div>
//       {appName} {props.name}
//     </div>
//   )
// };

class App extends React.Component {
  render() {
    return (
      <div>
        {appName} {this.props.name}
      </div>
    );
  }
}

export default App;