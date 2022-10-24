// sort users by user id in ascending order or descending order
const sortUsersById = (users, sort) => {
  if (sort === "asc") {
    // sort users by id in ascending order
    return users.sort((a, b) => {
      if (a.user_id < b.user_id) {
        return -1;
      }
      if (a.user_id > b.user_id) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort users by id in descending order
    return users.sort((a, b) => {
      if (a.user_id < b.user_id) {
        return 1;
      }
      if (a.user_id > b.user_id) {
        return -1;
      }
      return 0;
    });
  }
};

// sort users by user_name in ascending order or descending order
const sortUsersByUserName = (users, sort) => {
  if (sort === "asc") {
    // sort users by user_name in ascending order
    return users.sort((a, b) => {
      if (a.user_name.toLowerCase() < b.user_name.toLowerCase()) {
        return -1;
      }
      if (a.user_name.toLowerCase() > b.user_name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort users by user_name in descending order
    return users.sort((a, b) => {
      if (a.user_name.toLowerCase() < b.user_name.toLowerCase()) {
        return 1;
      }
      if (a.user_name.toLowerCase() > b.user_name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort users by user_full_name in ascending order or descending order
const sortUsersByFullName = (users, sort) => {
  if (sort === "asc") {
    // sort users by user_full_name in ascending order
    return users.sort((a, b) => {
      if (a.user_full_name.toLowerCase() < b.user_full_name.toLowerCase()) {
        return -1;
      }
      if (a.user_full_name.toLowerCase() > b.user_full_name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort users by user_full_name in descending order
    return users.sort((a, b) => {
      if (a.user_full_name.toLowerCase() < b.user_full_name.toLowerCase()) {
        return 1;
      }
      if (a.user_full_name.toLowerCase() > b.user_full_name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort users by user_email in ascending order or descending order
const sortUsersByEmail = (users, sort) => {
  if (sort === "asc") {
    // sort users by user_email in ascending order
    return users.sort((a, b) => {
      if (a.user_email.toLowerCase() < b.user_email.toLowerCase()) {
        return -1;
      }
      if (a.user_email.toLowerCase() > b.user_email.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort users by user_email in descending order
    return users.sort((a, b) => {
      if (a.user_email.toLowerCase() < b.user_email.toLowerCase()) {
        return 1;
      }
      if (a.user_email.toLowerCase() > b.user_email.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort users by user_phone in ascending order or descending order
const sortUsersByPhone = (users, sort) => {
  if (sort === "asc") {
    // sort users by user_phone in ascending order
    return users.sort((a, b) => {
      if (a.user_phone < b.user_phone) {
        return -1;
      }
      if (a.user_phone > b.user_phone) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort users by user_phone in descending order
    return users.sort((a, b) => {
      if (a.user_phone < b.user_phone) {
        return 1;
      }
      if (a.user_phone > b.user_phone) {
        return -1;
      }
      return 0;
    });
  }
};

// sort users by user_role in ascending order or descending order
const sortUsersByRole = (users, sort) => {
  if (sort === "asc") {
    // sort users by user_role in ascending order
    return users.sort((a, b) => {
      if (a.user_role.toLowerCase() < b.user_role.toLowerCase()) {
        return -1;
      }
      if (a.user_role.toLowerCase() > b.user_role.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort users by user_role in descending order
    return users.sort((a, b) => {
      if (a.user_role.toLowerCase() < b.user_role.toLowerCase()) {
        return 1;
      }
      if (a.user_role.toLowerCase() > b.user_role.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

export {
  sortUsersById,
  sortUsersByUserName,
  sortUsersByFullName,
  sortUsersByEmail,
  sortUsersByPhone,
  sortUsersByRole,
};
