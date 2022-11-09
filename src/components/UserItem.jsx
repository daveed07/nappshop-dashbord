import React, { useState } from "react";
import axios from "axios";
import Modal from "@components/Modal";
import StyledUserItem from "@styles/styledUserItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Trash from "./svg-components/Trash";

const API = "https://nappshop.herokuapp.com/api/users/";

const UserItem = ({ user, loading }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(user);

  const handleDelete = () => {
    axios
      .delete(`${API}${user.user_id}`)
      .then((response) => {
        alert("Usuario eliminado con éxito");
        window.location.reload();
      })
      .catch((error) => {
        alert("Error al eliminar usuario");
        window.location.reload();
      });
  };

  return (
    <StyledUserItem>
      <td className="check">
        {loading ? (
          <Skeleton width={20} height={20} />
        ) : (
          <input type="checkbox" id={user.user_id} />
        )}
      </td>
      <td className="user-id">
        {loading ? <Skeleton width="100%" /> : <p>{user.user_id}</p>}
      </td>
      <td className="user-name">
        {loading ? <Skeleton width="100%" /> : <p>{user.user_name}</p>}
      </td>
      <td className="user-full-name">
        {loading ? <Skeleton width="100%" /> : <p>{user.user_full_name}</p>}
      </td>
      <td className="user-email">
        {loading ? <Skeleton width="100%" /> : <p>{user.user_email}</p>}
      </td>
      <td className="user-phone">
        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <p>
            {
              user.user_phone ? user.user_phone.slice(0, 4) + "-" + user.user_phone.slice(4) : ""
            }
          </p>
        )}
      </td>
      <td className="role">
        {loading ? <Skeleton width="100%" /> : <p>{user.user_role}</p>}
      </td>
      <td className="actions">
        {loading ? (
          <Skeleton width={20} height={20} />
        ) : (
          <div className="actions-buttons">
            <button
              className="delete"
              onClick={() => setShowModal(true)}
              disabled={user.user_role === "admin" ? true : false}
            >
              <Trash />
            </button>
          </div>
        )}
      </td>
      {showModal && (
        <Modal
          title="Eliminar usuario"
          message="¿Estás seguro que deseas eliminar este usuario?"
          handleDelete={handleDelete}
          setShowModal={setShowModal}
        />
      )}
    </StyledUserItem>
  );
};

export default UserItem;
