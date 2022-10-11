import React, { useEffect } from "react";
import Dash from "@components/svg-components/Dash";
import Plus from "@components/svg-components/Plus";

const CreateProductContent = ({
  input,
  setInput,
  product,
  setProduct,
  submitProduct,
}) => {
  useEffect(() => {
    const categoryOptions = document.getElementById("category").options;
    const brandOptions = document.getElementById("brand").options;

    for (let i = 0; i < categoryOptions.length; i++) {
      if (categoryOptions[i].innerText.toLowerCase() === product.category) {
        document.getElementById("category").selectedIndex = i;
        setProduct({ ...product, category: i });
      }
    }

    for (let i = 0; i < brandOptions.length; i++) {
      if (brandOptions[i].innerText === product.brand) {
        document.getElementById("brand").selectedIndex = i;
        setProduct({ ...product, brand: i });
      }
    }
  }, [product]);

  console.log(product);

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group-wrapper wrapper-1">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select name="category" id="category"
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
            >
              <option value={null}>Select Category</option>
              <option value="1">Accessories</option>
              <option value="2">Products</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              list="types"
              name="type"
              id="type"
              value={product.type}
              onChange={(e) => setProduct({ ...product, type: e.target.value })}
            />
            <datalist id="types">
              <option value="Robot Vacuum" />
              <option value="Robot Mop" />
            </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <select
              name="brand"
              id="brand"
              onChange={(e) =>
                setProduct({ ...product, brand: e.target.value })
              }
            >
              <option value={null}>Select Brand</option>
              <option value="1">iRobot</option>
              <option value="2">Oster</option>
              <option value="3">Cuisinart</option>
              <option value="4">Philips</option>
              <option value="5">Nutribullet</option>
              <option value="6">DeLonghi</option>
              <option value="7">Dolce Gusto</option>
              <option value="8">Nesspresso</option>
              <option value="9">Pioneer</option>
            </select>
          </div>
        </div>
        <div className="form-group-wrapper">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="compareAtPrice">Compare at price</label>
            <input
              type="number"
              name="compareAtPrice"
              id="compareAtPrice"
              value={product.compare_at_price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  compare_at_price: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="form-group-wrapper">
          <div className="form-group stock-group">
            <p className="stock-amount">
              Stock: <span>{product.stock}</span>
            </p>
            <div className="stock-change">
              <input
                type="number"
                name="stock"
                id="stock"
                onChange={(e) => {
                  setProduct({
                    ...product,
                    stock: parseInt(e.target.value),
                  });
                }}
                value={product.stock}
              />
              <button
                type="button"
                className="add-stock"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct({ ...product, stock: product.stock + 1 });
                }}
              >
                <Plus fill="#rgba(0, 0, 0, 0.5)" />
              </button>
              <button
                type="button"
                className="remove-stock"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct({ ...product, stock: product.stock - 1 });
                }}
                disabled={product.stock <= 0}
              >
                <Dash fill="#rgba(0, 0, 0, 0.5)" />
              </button>
            </div>
          </div>
        </div>
        <div className="form-group-wrapper">
          <div className="form-group">
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              name="sku"
              id="sku"
              value={product.sku}
              onChange={(e) => {
                setProduct({ ...product, sku: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="barcode">Barcode</label>
            <input
              type="text"
              name="barcode"
              id="barcode"
              value={product.barcode}
              onChange={(e) => {
                setProduct({ ...product, barcode: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-group-wrapper">
          <div className="form-group">
            <label>Images</label>
            <div className="image-input-container">
              <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                type="button"
                className="add-image"
                id="add-image"
                onClick={() => {
                  const image = document.getElementById("image").value;
                  setProduct({
                    ...product,
                    images: [...product.images, image],
                  });

                  document.getElementById("image").value = "";
                }}
                disabled={input === ""}
              >
                <Plus fill="#rgba(0, 0, 0, 0.5)" />
              </button>
            </div>
          </div>
          <div className="form-group">
            <div className="button-wrapper">
              <button
                type="button"
                className="cancel"
                onClick={() => {
                  window.location.href = "/products";
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="save"
                onClick={() => {
                  submitProduct();
                }}
              >
                Save product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductContent;
