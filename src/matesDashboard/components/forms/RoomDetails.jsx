import React, { useState } from 'react';
import { API_URI } from '../../data/apiPath';

const RoomDetails = () => {
  const [name, setname] = useState("");
  const [phone, setphoneNo] = useState("");
  const [total, settotalRent] = useState("");
  const [perHead, setrentPer] = useState("");
  const [area, setarea] = useState("");
  const [city, setcity] = useState("");
  const [description, setdescription] = useState("");
  const [file, setfile] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setfile(selectedImage);
  };

  const handleRoomDetailsSub = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem('loginToken');
      if (!loginToken) {
        console.error("User not verified");
        return;
      }

      const roomDetailsData = new FormData();
      roomDetailsData.append('name', name);
      roomDetailsData.append('phone', phone);
      roomDetailsData.append('total', total);
      roomDetailsData.append('perHead', perHead);
      roomDetailsData.append('area', area);
      roomDetailsData.append('city', city);
      roomDetailsData.append('description', description);
      roomDetailsData.append('image', file)
     

      const response = await fetch(`${API_URI}/detail/add-details`, {
        method: 'POST',
        headers: {
          token: loginToken,
        },
        body: roomDetailsData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        alert("Room details successfully submitted!");
        setname("");
        setphoneNo("");
        settotalRent("");
        setrentPer("");
        setarea("");
        setcity("");
        setdescription("");
        setfile(null);
        window.location.reload()
      } else {
        console.error("Error:", data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Details submission failed:", error);
    }
  };

  return (
    <div className='RDspace'>
    <div className="RDsection">
      <h1 className="forrmd">Share Room Details</h1>
      <form onSubmit={handleRoomDetailsSub}>
        <label>Name</label><span>*</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label>Phone no</label><span>*</span>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setphoneNo(e.target.value)}
        />
        <label>Total Rent</label>
        <input
          type="text"
          name="totalRent"
          value={total}
          onChange={(e) => settotalRent(e.target.value)}
        />
        <label>Rent Per Head</label>
        <input
          type="text"
          name="rentPer"
          value={perHead}
          onChange={(e) => setrentPer(e.target.value)}
        />
        <label>Area</label><span>*</span>
        <input
          type="text"
          name="area"
          value={area}
          onChange={(e) => setarea(e.target.value)}
        />
        <label>City</label><span>*</span>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <label>Room Image</label> <br /> <br />
        <input type="file" onChange={handleImageUpload} />
        <div className="upldBtn">
          <br /> <br />
          <button type="submit">Upload</button>
        </div>
      </form>
      </div>
      </div>
  );
};

export default RoomDetails;
