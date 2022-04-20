import { Provider } from "react-redux";
import { store } from "./store/mainStore";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <Router>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Router>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
