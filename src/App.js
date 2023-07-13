
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './dashboard/component/LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
