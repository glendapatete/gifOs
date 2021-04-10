import ReactDOM from "react-dom";
import { AppProvider } from "./Components/AppContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  rootElement
);
