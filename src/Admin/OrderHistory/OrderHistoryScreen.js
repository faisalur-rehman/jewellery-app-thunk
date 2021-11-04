import React from "react";

function OrderHistoryScreen({ data, search, handleChange, searchedUsers }) {
  return (
    <>
      <section class="purchase_product_history" id="purchase_product_history">
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <input
              type="text"
              placeholder="Search Order"
              value={search}
              onChange={handleChange}
            />
            <strong>Order History:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>UserName</th>
                    <th>Quantity</th>
                    <th>Article Name</th>
                    <th>Price</th>
                  </tr>
                  {search
                    ? searchedUsers.map((user) => (
                        <tr>
                          <td>{user.user.firstName}</td>
                          <td>{user.quantity}</td>
                          <td>{user.product && user.product.name}</td>
                          <td>${user.product && user.product.price}</td>
                        </tr>
                      ))
                    : data.orders.map((user) => (
                        <tr>
                          <td>{user.user.firstName}</td>
                          <td>{user.quantity}</td>
                          <td>{user.product && user.product.name}</td>
                          <td>${user.product && user.product.price}</td>
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
export default OrderHistoryScreen;
