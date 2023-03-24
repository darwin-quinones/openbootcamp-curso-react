import React, { useState, useEffect } from "react";

// service importation
import {
  getAllUsers,
  getAllPageUsers,
  getUserDetails,
  login,
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);

  useEffect(() => {
    obtainUsers();
  }, []); // [], para que se ejecute una sola vez

  const obtainUsers = () => {
    // Note: Fetch return a promise
    getAllUsers()
      .then((response) => {
        if (response.status === 200 && response.ok) {
          response
            .json()
            .then((body) => {
              console.log("All users", body.data);
              setUsers(body.data);
              setPages(body.total_pages);
              setTotalUsers(body.total);
              setUsersPerPage(body.per_page);
            })
            .catch((error) => console.log(`Something went wrong: ${error}`));
        }
      })
      .catch((error) => {
        alert(`Error while retrieving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(users);
      });
  };

  const obtainPagedUsers = (page) => {
    getAllPageUsers(page)
      .then((response) => {
        console.log(`All paged users: ${response.data}`);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })

      .catch((error) => {
        alert(`Error while retrieving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(users);
      });
  };

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        setSelectedUser(response.data);
        console.log(response);
      })
      .catch((error) =>
        alert(`An error occurred while retrieving the user: ${error}`)
      )
      .finally(() => {
        console.log("Ended obtaining user:");
        console.table(selectedUser);
      });
  };

  const authUser = async () => {
    login("eve.holt@reqres.in", "cityslicka")
      .then((response) => {
        console.log('TOKEN', response.token);
        sessionStorage.setItem('token', response.token);
      })
      .catch((error) =>
        alert(`An error occurred while login user: ${error}`)
      )
      .finally(() => {
        console.log("Ended login user. Navigate to Home...");
      });
  };

  return (
    <div>

        {/* Button to simulate login */}
        <button onClick={ () => authUser() }>Login</button>

      <h2>Users</h2>
      {users.map((user, index) => (
        <p
          key={index}
          onClick={() => obtainUserDetails(user.id)}
          style={{ cursor: "pointer" }}
        >
          {user.first_name} {user.last_name}
        </p>
      ))}

      <p>
        Showing {usersPerPage} users of {totalUsers} in total
      </p>
      <button onClick={() => obtainPagedUsers(1)}>1</button>
      <button onClick={() => obtainPagedUsers(2)}>2</button>

      <div>
        <h3>User details</h3>
        {selectedUser !== null ? (
          <div>
            <p>Name: {selectedUser.first_name}</p>
            <p>Last name: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img
              alt="user img"
              src={selectedUser.avatar}
              style={{ height: "50px", width: "50px" }}
            />
          </div>
        ) : (
          <p>Please click on a User to see its Detail</p>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
