
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './dashboard/component/LandingPage.jsx';
import DashBoard from './dashboard/component/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
