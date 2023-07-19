
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './dashboard/component/LandingPage.jsx';
import DashBoard from './dashboard/component/Dashboard';
import ViewProperty from './dashboard/component/ViewProperty';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/dashboard/viewProperty' element={<ViewProperty/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
