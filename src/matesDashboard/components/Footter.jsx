import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <div className='footer'>
            <p className='cop'>Copyright &copy; Pardhu (Thug Lifer){currentYear}. All rights reserved.</p>
            <p className='cop'>Designed and Developed by Pardhu (Thug Lifer).</p>
        </div>
    );
};



export default Footer;
