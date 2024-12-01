import React, { useState, useEffect } from 'react';
import { API_URI } from '../data/apiPath';

const AllRooms = () => {
  const [details, setDetails] = useState(null);

  // Fetch room details
  const fetchRoomDetails = async () => {
    const roomId = localStorage.getItem('roomId');
    if (!roomId) {
      alert('Room ID not found in localStorage');
      return;
    }

    try {
      const response = await fetch(`${API_URI}/detail/${roomId}/details`);
      if (!response.ok) throw new Error('Failed to fetch room details');
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error('Failed to fetch room details:', error);
      alert('Unable to fetch room details. Please try again later.');
    }
  };

  useEffect(() => {
    fetchRoomDetails();
  }, []);

  // Delete a specific detail by ID
  const deleteDetailsById = async (detailsId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this detail?');
    if (!confirmDelete) return;

    // Optimistically update the state
    setDetails((prevDetails) => prevDetails.filter((detail) => detail._id !== detailsId));

    try {
      const response = await fetch(`${API_URI}/detail/${detailsId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete detail on the server');
      }

      alert('Room detail deleted successfully.');
    } catch (error) {
      console.error('Failed to delete detail:', error);

      // Revert the optimistic update if deletion fails
      setDetails((prevDetails) => {
        // Re-fetch the deleted item from the backend if possible (or maintain the previous state)
        return [...prevDetails, details.find((detail) => detail._id === detailsId)];
      });

      alert('Unable to delete the detail. Please try again.');
    }
  };

  return (
    <div className="jstTable">
      {details === null ? (
        <h1>Loading...</h1>
      ) : details.length === 0 ? (
        <h1>No Rooms added</h1>
      ) : (
        <table className="roomTable">
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item) => (
              <tr key={item._id}>
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
                <td>
                  <button onClick={() => deleteDetailsById(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllRooms;
