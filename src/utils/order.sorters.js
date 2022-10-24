// sort orders by id in ascending order or descending order
const sortOrdersById = (orders, sort) => {
  if (sort === "asc") {
    // sort orders by id in ascending order
    return orders.sort((a, b) => {
      if (a.order_id < b.order_id) {
        return -1;
      }
      if (a.order_id > b.order_id) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort orders by id in descending order
    return orders.sort((a, b) => {
      if (a.order_id < b.order_id) {
        return 1;
      }
      if (a.order_id > b.order_id) {
        return -1;
      }
      return 0;
    });
  }
};

// sort orders by name in ascending order or descending order
const sortOrdersByName = (orders, sort) => {
  if (sort === "asc") {
    // sort orders by name in ascending order
    return orders.sort((a, b) => {
      if (a.contact.name.toLowerCase() < b.contact.name.toLowerCase()) {
        return -1;
      }
      if (a.contact.name.toLowerCase() > b.contact.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort orders by name in descending order
    return orders.sort((a, b) => {
      if (a.contact.name.toLowerCase() < b.contact.name.toLowerCase()) {
        return 1;
      }
      if (a.contact.name.toLowerCase() > b.contact.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort orders by date in ascending order or descending order
const sortOrdersByDate = (orders, sort) => {
  if (sort === "asc") {
    // sort products by date in ascending order
    return orders.sort((a, b) => {
      return new Date(a.created_date) - new Date(b.created_date);
    });
  } else if (sort === "desc") {
    // sort products by date in descending order
    return orders.sort((a, b) => {
      return new Date(b.created_date) - new Date(a.created_date);
    });
  }
};

// sort orders by status in ascending order or descending order
const sortOrdersByStatus = (orders, sort) => {
  if (sort === "asc") {
    // sort orders by status in ascending order
    return orders.sort((a, b) => {
      if (a.order_status.toLowerCase() < b.order_status.toLowerCase()) {
        return -1;
      }
      if (a.order_status.toLowerCase() > b.order_status.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort orders by status in descending order
    return orders.sort((a, b) => {
      if (a.order_status.toLowerCase() < b.order_status.toLowerCase()) {
        return 1;
      }
      if (a.order_status.toLowerCase() > b.order_status.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort orders by total in ascending order or descending order
const sortOrdersByTotal = (orders, sort) => {
  if (sort === "asc") {
    // sort orders by total in ascending order
    return orders.sort((a, b) => {
      return a.total - b.total;
    });
  } else if (sort === "desc") {
    // sort orders by total in descending order
    return orders.sort((a, b) => {
      return b.total - a.total;
    });
  }
};

// sort orders by payment method in ascending order or descending order
const sortOrdersByPaymentMethod = (orders, sort) => {
  if (sort === "asc") {
    // sort orders by payment method in ascending order
    return orders.sort((a, b) => {
      if (a.payment_method.toLowerCase() < b.payment_method.toLowerCase()) {
        return -1;
      }
      if (a.payment_method.toLowerCase() > b.payment_method.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort orders by payment method in descending order
    return orders.sort((a, b) => {
      if (a.payment_method.toLowerCase() < b.payment_method.toLowerCase()) {
        return 1;
      }
      if (a.payment_method.toLowerCase() > b.payment_method.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort orders by payment status in ascending order or descending order

const sortOrdersByPaymentStatus = (orders, sort) => {
  if (sort === "asc") {
    // sort orders by payment status in ascending order
    return orders.sort((a, b) => {
      if (a.payment_status.toLowerCase() < b.payment_status.toLowerCase()) {
        return -1;
      }
      if (a.payment_status.toLowerCase() > b.payment_status.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort orders by payment status in descending order
    return orders.sort((a, b) => {
      if (a.payment_status.toLowerCase() < b.payment_status.toLowerCase()) {
        return 1;
      }
      if (a.payment_status.toLowerCase() > b.payment_status.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

export {
  sortOrdersById,
  sortOrdersByName,
  sortOrdersByDate,
  sortOrdersByStatus,
  sortOrdersByTotal,
  sortOrdersByPaymentMethod,
  sortOrdersByPaymentStatus,
};
