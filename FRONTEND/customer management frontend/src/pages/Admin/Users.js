// src/pages/Admin/Users.js

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import Modal from "react-modal";
import "../../styles/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/v1/auth/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [deleteConfirmationModalOpen]);

  const handleUpdate = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(`/api/v1/auth/users/update/${userId}`, updatedUserData);
      console.log(response.data);
      fetchUsers();
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (userId) => {
    setDeleteConfirmationModalOpen(true);
    setSelectedUser(userId);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`/api/v1/auth/users/delete/${selectedUser}`);
      console.log(response.data);
      fetchUsers();
      setDeleteConfirmationModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdatedName("");
    setUpdatedEmail("");
    setSelectedUser(null);
  };

  const saveUpdatedUser = () => {
    if (selectedUser) {
      const updatedUserData = {
        name: updatedName,
        email: updatedEmail,
      };
      handleUpdate(selectedUser, updatedUserData);
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setUpdatedName(selectedUser.name || "");
      setUpdatedEmail(selectedUser.email || "");
    }
  }, [selectedUser]);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <table className="w3-table w3-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => { setSelectedUser(user._id); openModal(); }}>Edit</button>
                      <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Update User Modal"
              className="ReactModal__Content"
              overlayClassName="ReactModal__Overlay"
            >
              <h2>Update User Details</h2>
              <div>
                <input
                  className="input w3-input w3-border w3-round-large"
                  type="text"
                  placeholder="Updated Name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
                <input
                  className="input w3-input w3-border w3-round-large"
                  type="text"
                  placeholder="Updated Email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
                <button onClick={saveUpdatedUser}>Save Updated User</button>
              </div>
              <button onClick={closeModal}>Close</button>
            </Modal>
            {/* Modal for confirmation before deleting user */}
            <Modal
              isOpen={deleteConfirmationModalOpen}
              onRequestClose={() => setDeleteConfirmationModalOpen(false)}
              contentLabel="Delete Confirmation Modal"
              className="ReactModal__Content"
              overlayClassName="ReactModal__Overlay"
            >
              <h2>Confirm Deletion</h2>
              <p>Are you sure you want to delete this user?</p>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={() => setDeleteConfirmationModalOpen(false)}>No</button>
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;

