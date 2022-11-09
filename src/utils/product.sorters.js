// sort products by name in ascending order or descending order
const sortProductsByName = (products, sort) => {
  if (sort === "asc") {
    // sort products by alphabet in ascending order
    return products.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort products by alphabet in descending order
    return products.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort products by brand in ascending order or descending order
const sortProductsByBrand = (products, sort) => {
  if (sort === "asc") {
    // sort products by alphabet in ascending order
    return products.sort((a, b) => {
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
        return -1;
      }
      if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort products by alphabet in descending order
    return products.sort((a, b) => {
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
        return 1;
      }
      if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort products by category in ascending order or descending order
const sortProductsByCategory = (products, sort) => {
  if (sort === "asc") {
    // sort products by category by alphabet in ascending order
    return products.sort((a, b) => {
      if (a.category.toLowerCase() < b.category.toLowerCase()) {
        return -1;
      }
      if (a.category.toLowerCase() > b.category.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort products by category by alphabet in descending order
    return products.sort((a, b) => {
      if (a.category.toLowerCase() < b.category.toLowerCase()) {
        return 1;
      }
      if (a.category.toLowerCase() > b.category.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort products by type in ascending order or descending order
const sortProductsByType = (products, sort) => {
  if (sort === "asc") {
    // sort products by type by alphabet in ascending order
    return products.sort((a, b) => {
      if (a.type.toLowerCase() < b.type.toLowerCase()) {
        return -1;
      }
      if (a.type.toLowerCase() > b.type.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "desc") {
    // sort products by type by alphabet in descending order
    return products.sort((a, b) => {
      if (a.type.toLowerCase() < b.type.toLowerCase()) {
        return 1;
      }
      if (a.type.toLowerCase() > b.type.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
};

// sort products by SKU in ascending order or descending order
const sortProductsBySKU = (products, sort) => {
  if (sort === "asc") {
    return products.sort((a, b) => (a.sku > b.sku ? 1 : -1));
  } else if (sort === "desc") {
    return products.sort((a, b) => (a.sku < b.sku ? 1 : -1));
  }
};

// sort products by barcode in ascending order or descending order
const sortProductsByBarcode = (products, sort) => {
  if (sort === "asc") {
    return products.sort((a, b) => (a.barcode > b.barcode ? 1 : -1));
  } else if (sort === "desc") {
    return products.sort((a, b) => (a.barcode < b.barcode ? 1 : -1));
  }
};

// sort products by date in ascending order or descending order
const sortProductsByDate = (products, sort) => {
  if (sort === "asc") {
    // sort products by date in ascending order
    return products.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  } else if (sort === "desc") {
    // sort products by date in descending order
    return products.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }
};

// sort products by stock in ascending order or descending order
const sortProductsByStock = (products, sort) => {
  if (sort === "asc") {
    return products.sort((a, b) => (a.stock > b.stock ? 1 : -1));
  } else if (sort === "desc") {
    return products.sort((a, b) => (a.stock < b.stock ? 1 : -1));
  }
};

// sort products by price in ascending order or descending order
const sortProductsByPrice = (products, sort) => {
  if (sort === "asc") {
    return products.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sort === "desc") {
    return products.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
};

export {
  sortProductsByName,
  sortProductsByBrand,
  sortProductsByCategory,
  sortProductsByType,
  sortProductsBySKU,
  sortProductsByBarcode,
  sortProductsByDate,
  sortProductsByStock,
  sortProductsByPrice,
};
