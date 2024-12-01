import React, { useState, useEffect } from 'react';
import { API_URI } from '../data/apiPath';

const GetRooms = () => {
    const [roomsData, setRoomsData] = useState([]); // Fixed casing to `setRoomsData`

    const allRoomsDetails = async () => {
        try {
            const response = await fetch(`${API_URI}/room/all-rooms`);
            const newData = await response.json(); // Added `()` to call `response.json()`

            setRoomsData(newData); // Fixed casing here as well
            console.log("This is API data:", newData);
        } catch (error) {
            alert("Failed to fetch data");
            console.error("Failed to fetch data", error); // Included the `error` for better debugging
        }
    };

    useEffect(() => {
        allRoomsDetails(); // Corrected spacing
    }, []);

    return (
        <section className='getRoomsall'> 
            {roomsData.rooms && roomsData.rooms.map((room) => {
                return (
                    <>
                        <div >
                    {room.details.map((item) => {
                        return (
                            <div>
            <table className="allRoomdtls">
            <thead>
            <tr>
              <th>Name</th>
              <th>Phone no</th>
              <th>Total</th>
              <th>Per Head</th>
              <th>Area</th>
              <th>City</th>
              <th>Description</th>
              <th>Image</th>

            </tr>
          </thead>
                <tr >
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.total}</td>
                <td>{item.perHead}</td>
                <td>{item.area}</td>
                <td>{item.city}</td>
                <td>{item.description}</td>
                <td>
                  {item.image ? (
                    <img
                      src={`${API_URI}/uploads/${item.image}`}
                      alt={item.name || 'Room image'}
                      style={{ width: '50px', height: '50px' }}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                </tr>
                </table>
            </div>
                            
                            
                        )
                    })}
                </div>
                    </>
                )
            })
            
                
            
            }
        </section>      
       
    );
};

export default GetRooms;
