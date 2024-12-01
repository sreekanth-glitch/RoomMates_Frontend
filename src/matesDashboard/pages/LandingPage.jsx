import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Room from "../components/Room";
import Mates from "../components/Mates";
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import About from '../components/About';
import ContactUs from '../components/Contact us';
import RoomDetails from '../components/forms/RoomDetails';
import AllRooms from '../components/AllRooms';
import GetRooms from '../components/GetRooms';
import Footer from '../components/Footter';


const LandingPage = () => {
  const [showHome, setHome] = useState(true);
  const [showAbout, setshowAbout] = useState(false);
  const [showContactUs, setshowContactUs] = useState(false);
  const [showRoom, setShowRoom] = useState(true); 
  const [showRegCom, setshowRegCom] = useState(false);
  const [showAllRooms, setshowAllRooms] = useState(false);
  const [showRoomDetails, setshowRoomDetails] = useState(false);
  const [showGetRooms, setshowGetRooms] = useState(false);
  const [showLogOut, setshowLogOut] = useState(false)


  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken');
    if (loginToken) {
      setshowRoomDetails(true)
      setshowRegCom(false)
      setshowLogOut(true)
      setShowRoom(false)
      setshowAllRooms(true)
      setshowGetRooms(false)
    }

  }, [])

  const logOutHandler = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("roomId");
    window.location.reload()

  }
  

  const showHomePage = () => {
    setHome(true);
    setshowAbout(false);
    setshowContactUs(false);
    setShowRoom(true);  // Show Room
    setshowRegCom(false);
    setshowRoomDetails(false)
    setshowAllRooms(false)
    setshowLogOut(false)
    setshowGetRooms(false)
  };

  const showAboutPage = () => {
    setHome(true);
    setshowAbout(true);
    setshowContactUs(false);
    setShowRoom(false);  // Hide Room
    setshowRegCom(false);
    setshowRoomDetails(false)
    setshowAllRooms(false)
    setshowLogOut(false)
    setshowGetRooms(false)
  };

  const contactUsPage = () => {
    setHome(true);
    setshowAbout(false);
    setshowContactUs(true);
    setShowRoom(false);  // Hide Room
    setshowRegCom(false);
    setshowRoomDetails(false)
    setshowAllRooms(false)
    setshowLogOut(false)
    setshowGetRooms(false)
  };

  const showRndLComp = () => {
    setHome(true);
    setshowAbout(false);
    setshowContactUs(false);
    setShowRoom(false);  // Hide Room
    setshowRegCom(true);
    setshowRoomDetails(false)
    setshowAllRooms(false)
    setshowLogOut(false)
    setshowGetRooms(false)
  };

  const showGetRoomsHandler = () => {
    setHome(true);
    setshowAbout(false);
    setshowContactUs(false);
    setShowRoom(false);  // Hide Room
    setshowRegCom(false);
    setshowRoomDetails(false)
    setshowAllRooms(false)
    setshowLogOut(false)
    setshowGetRooms(true)
  };

  
  
  return (
   <>
    
      {showHome && <NavBar showAboutPage={showAboutPage} contactUsPage={contactUsPage} showHomePage={showHomePage}
      showLogOut = {showLogOut} logOutHandler = {logOutHandler}
      />}
      {showRoom && <div className='container'>
        <Room showGetRoomsHandler={showGetRoomsHandler} />
        <Mates showRndLComp={showRndLComp} />
      </div>}
      {showRegCom && <div className="form-wrapper">
        <div className="form-section">
          <Register />
        </div>
        <hr className="separator" />
        <div className="form-section">
         <Login />
        </div>
      </div>}
      {showAbout && <About />}
      {showContactUs && <ContactUs />}
      {showRoomDetails && <RoomDetails />}
      {showAllRooms && <AllRooms />}
      {showGetRooms && <GetRooms/>}
      <Footer />
    </>
    
  );
};

export default LandingPage;
