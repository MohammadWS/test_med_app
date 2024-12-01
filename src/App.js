import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page.js';
import SignUp from './Components/Sign_Up/Sign_Up.js';
import Login from './Components/Login/Login.js';
import BookingConsultation from './Components/BookingConsultation.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import Notification from './Components/Notification/Notification.js';

// Correct imports for free FontAwesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import ReviewForm from './Components/ReviewForm/ReviewForm.js';

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
                <Route path="/booking-consultation" element={<BookingConsultation />} />
                <Route path="/reviews" element={<ReviewForm />} />
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
    );
}

export default App;
