import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page.js';
import SignUp from './Components/Sign_Up/Sign_Up.js';
import Login from './Components/Login/Login.js';
// import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';  
import InstantConsultation from './Components/BookingConsultation.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import Notification from './Components/Notification/Notification.js';

// Correct imports for free FontAwesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(fas);

function App() {
    return (
        <div className="App">
        <BrowserRouter>
          <Notification>
              <Routes>
                <Route path="/" element={<Landing_Page />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="<component_route>" element={<component_name/>}/> //Replace the component_route with the component path and component_name with the component name as imported in the App.js file. 
                
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
    );
}

export default App;
