import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledUsersContainer from "@styles/styledUsersContainer";
import UserItem from "@components/UserItem";
import LeftArrow from "@components/svg-components/LeftArrow";
import RightArrow from "@components/svg-components/RightArrow";
import SortUp from "@components/svg-components/SortUp";
import SortDown from "@components/svg-components/SortDown";
import {
  sortUsersById,
  sortUsersByUserName,
  sortUsersByFullName,
  sortUsersByEmail,
  sortUsersByPhone,
  sortUsersByRole,
} from "@utils/user.sorters";

const API = "https://nappshop-backend.herokuapp.com/api/v1/users";

const UsersContainer = ({ users, loading, error }) => {
  const [sortId, setSortId] = useState("asc");
  const [sortUserName, setSortUserName] = useState("asc");
  const [sortFullName, setSortFullName] = useState("asc");
  const [sortEmail, setSortEmail] = useState("asc");
  const [sortPhone, setSortPhone] = useState("asc");
  const [sortRole, setSortRole] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);
  const [searchUsers, setSearchUsers] = useState(users);

  useEffect(() => {
    setSearchUsers(users);
  }, [users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = searchUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // create function called handleDelete that deletes all selected users from the database
  const handleDelete = () => {
    const selectedUsers = document.querySelectorAll(".check input:checked");
    selectedUsers.forEach((user) => {
      axios
        .delete(`https://nappshop.herokuapp.com/api/users/${user.id}`)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });

    alert("Users deleted successfully");
    window.location.reload();
  };

  const handleSearchUser = () => {
    // search for users that match the search query and update the searchUsers state
    const searchQuery = document.querySelector(".search input").value;
    const searchResults = users.filter((user) => {
      return (
        user.user_id === Number(searchQuery) ||
        user.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.user_full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.user_email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.user_phone.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setSearchUsers(searchResults);
  };
  return (
    <StyledUsersContainer>
      {error && <p>{error.message}</p>}
      <div className="header">
        <div className="bulk-actions">
          <select name="bulk-actions" id="bulk-actions">
            <option value="bulk-actions">Bulk Actions</option>
            <option value="delete">Delete</option>
          </select>
          <button
            type="button"
            id="apply"
            onClick={() => {
              if (document.querySelector("#bulk-actions").value === "delete") {
                handleDelete();
              }
            }}
          >
            Apply
          </button>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button
            onClick={() => {
              handleSearchUser();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="check">
              <input
                type="checkbox"
                onChange={(e) => {
                  const checkboxes = document.querySelectorAll(
                    ".table input[type=checkbox]"
                  );
                  checkboxes.forEach((checkbox) => {
                    checkbox.checked = e.target.checked;
                  });
                }}
              />
            </th>
            <th className="user-id">
              <div className="header-wrapper">
                <p>User ID</p>
                <div className="sort">
                  {sortId === "asc" && (
                    <SortUp
                      onClick={() => {
                        setSortId("desc");
                        sortUsersById(users, "desc");
                      }}
                    />
                  )}
                  {sortId === "desc" && (
                    <SortDown
                      onClick={() => {
                        setSortId("asc");
                        sortUsersById(users, "asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="user-name">
              <div className="header-wrapper">
                <p>Username</p>
                <div className="sort">
                  {sortUserName === "asc" && (
                    <SortUp
                      onClick={() => {
                        setSortUserName("desc");
                        sortUsersByUserName(users, "desc");
                      }}
                    />
                  )}
                  {sortUserName === "desc" && (
                    <SortDown
                      onClick={() => {
                        setSortUserName("asc");
                        sortUsersByUserName(users, "asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="user-full-name">
              <div className="header-wrapper">
                <p>Full Name</p>
                <div className="sort">
                  {sortFullName === "asc" && (
                    <SortUp
                      onClick={() => {
                        setSortFullName("desc");
                        sortUsersByFullName(users, "desc");
                      }}
                    />
                  )}
                  {sortFullName === "desc" && (
                    <SortDown
                      onClick={() => {
                        setSortFullName("asc");
                        sortUsersByFullName(users, "asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="email">
              <div className="header-wrapper">
                <p>Email</p>
                <div className="sort">
                  {sortEmail === "asc" && (
                    <SortUp
                      onClick={() => {
                        setSortEmail("desc");
                        sortUsersByEmail(users, "desc");
                      }}
                    />
                  )}
                  {sortEmail === "desc" && (
                    <SortDown
                      onClick={() => {
                        setSortEmail("asc");
                        sortUsersByEmail(users, "asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="user-phone">
              <div className="header-wrapper">
                <p>Phone</p>
                <div className="sort">
                  {sortPhone === "asc" && (
                    <SortUp
                      onClick={() => {
                        setSortPhone("desc");
                        sortUsersByPhone(users, "desc");
                      }}
                    />
                  )}
                  {sortPhone === "desc" && (
                    <SortDown
                      onClick={() => {
                        setSortPhone("asc");
                        sortUsersByPhone(users, "asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="role">
              <div className="header-wrapper">
                <p>Role</p>
                <div className="sort">
                  {sortRole === "asc" && (
                    <SortUp
                      onClick={() => {
                        setSortRole("desc");
                        sortUsersByRole(users, "desc");
                      }}
                    />
                  )}
                  {sortRole === "desc" && (
                    <SortDown
                      onClick={() => {
                        setSortRole("asc");
                        sortUsersByRole(users, "asc");
                      }}
                    />
                  )}
                </div>
              </div>
            </th>
            <th className="actions">
              <div className="header-wrapper">
                <p>Actions</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(5)].map((index) => (
                <tr key={index}>
                  {[...Array(7)].map((i) => (
                    <td key={i} style={{ width: "20px" }}>
                      <Skeleton width="100%" />
                    </td>
                  ))}
                </tr>
              ))
            : currentUsers.map((user) => (
                <UserItem key={user.user_id} user={user} loading={loading} />
              ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination-count">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <p>
              Showing {indexOfFirstUser + 1} to {indexOfLastUser} of{" "}
              {searchUsers.length}
            </p>
          )}
        </div>
        <div className="pagination-buttons">
          <button
            type="button"
            className="prev"
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
            disabled={currentPage === 1}
          >
            <LeftArrow />
          </button>
          <button
            type="button"
            className="next"
            onClick={() => {
              if (currentPage < Math.ceil(searchUsers.length / usersPerPage)) {
                paginate(currentPage + 1);
              }
            }}
            disabled={
              currentPage === Math.ceil(searchUsers.length / usersPerPage)
            }
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </StyledUsersContainer>
  );
};

export default UsersContainer;
