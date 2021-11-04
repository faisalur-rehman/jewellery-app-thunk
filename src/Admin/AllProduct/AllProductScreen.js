import React from "react";
import { Link, useHistory } from "react-router-dom";

function AllProductScreen({ data, handleDelete }) {
  const history = useHistory();
  console.log("dataaaa", data);
  function handleEdit(id) {
    history.push(`/update-product/${id}`);
  }
  return (
    <>
      <section
        class="purchase_product_history"
        id="all_product_listing"
        style={{ display: "block", visibility: "visible" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Product Listing:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Description</th>
                    <th>Product Type</th>
                    <th>Category</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  {data.products.map((article) => (
                    <tr>
                      <td>{article.name}</td>
                      <td>{article.color}</td>
                      <td>{article.price}</td>
                      <td>{article.size}</td>
                      <td>{article.description}</td>
                      <td>{article.isFeatured ? "Featured" : "Normal"}</td>
                      <td>{article.category}</td>

                      <td>
                        <Link to={`/product/${article._id}`}>Update</Link>
                      </td>
                      <td onClick={() => handleDelete(article._id)}>Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AllProductScreen;
