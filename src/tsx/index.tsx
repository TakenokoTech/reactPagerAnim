import * as React from "react";
import { render } from "react-dom";

// interface IAppProps {}
// interface IAppState {}

class App extends React.Component {
  public render(): JSX.Element {
    return (
        <div className="hello">Hello wo</div>
    );
  }
}

const rootDom: HTMLElement = document.getElementById("root");
render(<App />, rootDom);
