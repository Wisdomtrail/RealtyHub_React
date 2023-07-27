import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Chatbot } from 'react-simple-chatbot';
import SavedApartments from "./dashboard/component/SavedApartments";
import UserProfileUpdate from "./dashboard/component/UserProfileUpdate";
import LandingPage from "./dashboard/component/LandingPage";
import ChatBox from './dashboard/component/ChatBox';
import Notifications from './dashboard/component/Notifications';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/profile' element={<UserProfileUpdate/>}/>
            <Route path='/chatBox' element={<ChatBox/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/savedApartments' element={<SavedApartments/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
