import React from "react";

function RaffleProductScreen({ data, handleWinner }) {
  console.log("data", data);
  return (
    <>
      <section
        class="purchase_product_history"
        id="all_raffle_product_listing"
        style={{ visibility: "visible", display: "block" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Raffle Product Listing:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Style</th>

                    <th>Release Date</th>

                    <th>Price</th>
                    <th>Winning Status</th>
                    <th>Mark Winner</th>
                  </tr>
                  {data.raffle.map((raffle) => (
                    <tr>
                      <td>{raffle.firstName}</td>
                      <td>{raffle.articleId && raffle.articleId.style}</td>
                      <td>
                        {raffle.articleId &&
                          new Date(raffle.articleId.releaseDate).toDateString()}
                      </td>

                      <td>{raffle.articleId && raffle.articleId.price} CHF</td>

                      <td>{raffle.isWinner === null ? "Loser" : "Winner"}</td>
                      <td onClick={() => handleWinner(raffle._id)}>
                        Mark as Winner
                      </td>
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
export default RaffleProductScreen;
