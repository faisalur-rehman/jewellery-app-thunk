import React from "react";
import "../../Admin/Header/AdminStyle.css";
function ContactMessageScreen({ data }) {
  console.log("data", data);
  return (
    <>
      <section
        class="purchase_product_history"
        id="contact_history"
        style={{ visibility: "visible", display: "block" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Contact Messages:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                  {data.contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td></td>
                      <td></td>
                      <td>{contact.message}</td>
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
export default ContactMessageScreen;
