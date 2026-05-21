import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Landing from './pages/landing'
import Register from './pages/Register'
import Login from './pages/Login'
import useAuth from './hooks/useAuth'
import { jwtDecode } from 'jwt-decode'
import Dashboard from './pages/Dashboard'
import AppLayout from './Layouts/AppLayout'
import Addtrip from './trip/Addtrip'
import Edittrip from './trip/Edittrip'
import Trips from './trip/Trips'
import ViewTrips from './pages/client/ViewTrips'
import Booking from './pages/bookings/Booking'
import MyBookings from './pages/client/MyBookings'
import ContactList from './pages/contact/ContactList'

const App = () => {
  const { token, logout } = useAuth();


  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userId;

//token expire vayo ki kaso yo check hudai xa
      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;
        if (currentTime > decodedToken?.exp) {
          logout();
          return <Navigate to="/login" />;
        }
      }

//token xa ki nai tyo check hudai xa
      if (!token || !userId) {
        logout();
        return <Navigate to="/login" />;
      }


      return <AppLayout role={decodedToken.role} />;
    } catch (err) {
      console.error(err);
      logout();
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>

      <Route element={<ProtectedRoutes/>}>

      {/* for admin */}
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/trips/add" element={<Addtrip/>}/>
      <Route path="/trips/update/:id" element={<Edittrip/>}/>
      <Route path="/trips" element={<Trips />}/>
      <Route path='/bookings' element={<Booking/>} />
      <Route path='/contacts-list' element={<ContactList/>} />

      {/* for client */}



      <Route path='/client/trips' element={<ViewTrips/>} />
      <Route path='/client/bookings' element={<MyBookings/>} />
      

      </Route>

      <Route path='*' element={<div>Not found</div>} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App
