import React from "react";
import useGetUsers from "@hooks/useGetUsers";
import UsersContainer from "@containers/UsersContainer";
import StyledUsers from "@styles/styledUsers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API = "https://nappshop-backend.herokuapp.com/api/v1/users";

const Users = () => {
  const { users, loading, error } = useGetUsers(API);

  return (
    <StyledUsers>
      <h1 className="title">
        {loading ? <Skeleton width={120} /> : "Usuarios"}
      </h1>
      <UsersContainer users={users} loading={loading} error={error} />
    </StyledUsers>
  );
};

export default Users;
