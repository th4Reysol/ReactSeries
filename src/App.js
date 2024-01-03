import './App.css';
import About from './components/About';
import Header from './components/Header';
import Preface from './components/Preface';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import With from './components/With';
import Know from './components/Know';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Preface />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/know" element={<Know />}>
          </Route>
          <Route path="/with" element={<With />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
