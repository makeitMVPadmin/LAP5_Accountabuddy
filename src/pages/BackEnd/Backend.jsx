// src/components/SomeComponent.js
import React, { useState, useEffect } from 'react';
import { createData, readData, updateData, deleteData, updateUserDetails } from '../../utils/Functions/functions';

const BackEndTest = () => {
  const [data, setData] = useState([]);
  const collectionName = 'Users';

  useEffect(() => {
    const fetchData = async () => {
      const result = await readData(collectionName);
      setData(result);
      console.log(result);
    };
    fetchData();
  }, []);
  if(data.length>0){
    console.log(data);
  }

async function testUpdateUserDetails() {
      const id = 'test user';
      const updatedData = {
          email: "t@gmail.com",
          firstName: "Travis",
          lastName: "J.",
          linkedin: "testtravis@linkedin.com",
          matchedWith: "n/a",
          profile: "America",
          role: "developer",
          skills: "python",
      };
  
  try {
      // Update user details      
      await updateUserDetails(id, updatedData);
      console.log("User details updated successfully");
  } catch (error) {
      console.log("Error updating user details:", error);
  }
  }


  const handleCreate = async () => {
    const newData = { name: 'New Item', description: 'Description' };
    await createData(collectionName, newData);
    // Refresh the data
    const updatedData = await readData(collectionName);
    setData(updatedData);
  };

  const handleUpdate = async (id) => {
    const updatedData = { name: 'Updated Item', description: 'Updated Description' };
    await updateData(collectionName, id, updatedData);
    // Refresh the data
    const updatedDataList = await readData(collectionName);
    setData(updatedDataList);
  };

  const handleDelete = async (id) => {
    await deleteData(collectionName, id);
    // Refresh the data
    const updatedDataList = await readData(collectionName);
    setData(updatedDataList);
  };

  return (
    <div>
  <button onClick={() => testUpdateUserDetails()}>Update</button>

      {/* <button onClick={handleCreate}>Create</button>
      {console.log(data)}
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.firstName}</h2>
          <p>{item.description}</p>
          <p>{item.email}</p>
          <button onClick={() => handleUpdate(item.id)}>Update</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))} */}
    </div>
  );
};

export default BackEndTest;
