import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';

function List() {
  const [contact, setContact] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios.get("https://contactme-backend-1c0d26bf8354.herokuapp.com/getcontact")
      .then((response) => {
        console.log(response.data);
        setContact(response.data);
      })
      .catch((err) => {
        if (err.response) {
          setErr(err.message);
        } else if (err.request) {
          setErr(err.message);
        } else {
          setErr(err.message);
        }
      });
  }, []);

  return (
    <div className="list-container">
      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Contact Method</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((com, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{com.fullname}</td>
                <td>{com.email}</td>
                <td>{com.phonenumber}</td>
                <td>{com.subject}</td>
                <td>{com.message}</td>
                <td>{com.contactmethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
