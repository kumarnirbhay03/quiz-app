import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header  from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/'  element={<Home/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
