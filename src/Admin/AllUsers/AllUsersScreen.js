import React from "react";

const AllUsersScreen = ({
  search,
  handleChange,
  userObj,
  searchedUsers,
  data,
}) => {
  console.log("users", data);
  return (
    <div>
      <section
        class="purchase_product_history"
        id="all_product_listing"
        style={{ display: "block", visibility: "visible" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <input
              type="text"
              placeholder="Search Users"
              value={search}
              onChange={handleChange}
            />
            <strong>User Listing:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                  </tr>

                  {search
                    ? searchedUsers.map((article) => (
                        <tr>
                          <td>{article.firstName}</td>
                          <td>{article.address}</td>
                          <td>{article.email}</td>
                          <td>{article.mobileNo}</td>
                        </tr>
                      ))
                    : data.users.map((article) => (
                        <tr>
                          <td>{article.firstName}</td>
                          <td>{article.address}</td>
                          <td>{article.email}</td>
                          <td>{article.mobileNo}</td>
                          {/* <td>{new Date(article.releaseDate).toDateString()}</td>
                      <td>{article.description}</td>
                      <td>{article.price}</td>
                      <td>
                        <a>
                          <i
                            class="fas fa-edit"
                            onClick={() => handleEdit(article._id)}
                          ></i>
                        </a>
                      </td>
                      <td>
                        <a>
                          <i
                            class="fas fa-trash-alt"
                            onClick={() => handleDelete(article._id)}
                          ></i>
                        </a>
                      </td> */}
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsersScreen;
