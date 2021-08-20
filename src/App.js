import './App.css';
import React,{useState} from 'react';
import SignInPage from './pages/SignInPage';
import {BrowserRouter, Switch,Route, Link} from "react-router-dom";
import { Home } from './pages/Home';
import HostelSelection from './pages/HostelSelection';
import RoomSelection from './pages/RoomSelection';
import NavBar from './components/NavBar';
// import ConfirmationModal from './components/ConfirmationModal';

export const HostelContext = React.createContext();
function App() {

  let [bookedR, setBookedRoom] = useState(false);
  let [selectedMale, setSelectedMale] = useState(true);

  const bookStatus = function(){
    setBookedRoom(!bookedR);
  }
  const genderHandler = function(){
    setSelectedMale(!selectedMale);
  }


  return (
    
    <HostelContext.Provider value={{
      isSigned: false, selectedBoys: true, booked: [], floor: 1, bookedRoom: bookedR, bookStatus: bookStatus, male:selectedMale, setGender:genderHandler }}>
        {/* <div className="App">      
            
        
       
        </div> */}
      
        <NavBar/>
        <Switch>             
              <Route exact path="/home">
                  <Home/>
              </Route>                             
              <Route exact path="/selectHostel">
                  <HostelSelection />
                </Route>                             
              <Route exact path="/RoomSelection">
                  <RoomSelection />
                </Route>                             
                <Route >
                    <SignInPage/> 
                </Route>                             
        </Switch>
      </HostelContext.Provider>
      
  );
}

export default App;
