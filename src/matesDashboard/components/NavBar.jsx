import React from 'react'

const NavBar = ({showAboutPage, contactUsPage, showHomePage, showLogOut, logOutHandler}) => {
  return (
<div>
      <div className='navsection'><h2>RoomMates</h2>
        <div className='navNames'>
    <a href="#home" onClick={showHomePage} className='navLink'>Home</a>
    <a href="#about" onClick={showAboutPage } className='navLink'>About</a>
          <a href="#contact us" onClick={contactUsPage} className='navLink'>Contact us</a>
          <div className='logOut'>
            {showLogOut && <button onClick={logOutHandler} >Log out</button>}
            </div>
        </div>
      </div>
 </div>
  
    


  
  
  )
}

export default NavBar
