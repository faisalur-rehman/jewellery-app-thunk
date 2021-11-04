import React from "react";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import MyAccountPage from "./Pages/MyAccountPage";
import WishListPage from "./Pages/WishListPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MyCartPage from "./Pages/MyCartPage";
import SingleProductPage from "./Pages/SingleProductPage";
import ReadMePage from "./Pages/ReadMePage";
import Header from "./Admin/Header/Header";
import AddProduct from "./Admin/AddProduct/AddProduct";
import AllProduct from "./Admin/AllProduct/AllProduct";
import AllUsers from "./Admin/AllUsers/AllUsers";
import OrderHistory from "./Admin/OrderHistory/OrderHistory";
import UpdateProduct from "./Admin/UpdateProduct/UpdateProduct";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/singleproduct/:id">
            <SingleProductPage />
          </Route>
          <Route path="/readme">
            <ReadMePage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/mycart">
            <MyCartPage />
          </Route>
          <Route path="/aboutus">
            <AboutUsPage />
          </Route>
          <Route path="/contactus">
            <ContactUsPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/myaccount">
            <MyAccountPage />
          </Route>
          <Route path="/wishlist">
            <WishListPage />
          </Route>
          <Route path="/admin">
            <Header />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/all-products">
            <AllProduct />
          </Route>
          <Route path="/all-users">
            <AllUsers />
          </Route>
          <Route path="/all-products">
            <AllProduct />
          </Route>
          <Route path="/product/:id">
            <UpdateProduct />
          </Route>
          <Route path="/order-history">
            <OrderHistory />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
