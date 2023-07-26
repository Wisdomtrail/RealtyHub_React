import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from '../src/store';
import './App.css';
import View from './dashboard/component/View.jsx'
import SignUp from './dashboard/component/LandingPage.jsx';
import DashBoard from './dashboard/component/Dashboard';
import ViewProperty from './dashboard/component/ViewProperty';
import MyApartMent from './dashboard/component/MyApartment';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/dashboard/viewProperty' element={<ViewProperty/>}/>
            <Route path='/View' element={<View/>}/>
            <Route path='dashboard/my-apartMent' element={<MyApartMent/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
