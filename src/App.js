import './App.css';
// import Input from './Input';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Input /> */}
    </div>
  );
}

export default App;
