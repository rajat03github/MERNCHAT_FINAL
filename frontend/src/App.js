import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      {/* /chats will take to CHATPAGE */}
      <Route path="/chats" component={Chatpage} exact />
    </div>
  );
}

export default App;
