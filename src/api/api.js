import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

const user = JSON.parse(localStorage.getItem("user"));
console.log("user");
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export function loginUser(data) {
  return api.post(`/auth/login`, { ...data });
}
export function signup(data) {
  return api.post(`/auth/register`, { ...data });
}
export function getProducts() {
  return api.get(`/product`);
}
export function getSingleProduct(data) {
  return api.get(`/product/${data.id}`);
}
export function getProfile() {
  return api.get(`/user/profile/${user.user._id}`);
}
export function updateProfile(data) {
  return api.patch(`/user/update-profile`, { ...data });
}
export function addToWishlist(data) {
  return api.post(`/wishlist`, { ...data });
}
export function getPopularItem() {
  return api.get(`/product/featured/last`);
}
export function getWishlistProducts() {
  return api.get(`/wishlist`);
}
export function removeFromWishlist(data) {
  return api.delete(`/wishlist/${data.id}`);
}
export function featuredProduct() {
  return api.get(`/product/featured`);
}
export function getAllCategories() {
  return api.get(`/getPpopularItems`);
}
export function contactUs(data) {
  return api.post(`/contact`, { ...data });
}
export function order(data) {
  return api.post(`/order`, { ...data });
}
export function addproduct(data) {
  return api.post(`/product`, { ...data });
}
export function updateProduct(data) {
  return api.patch(`/product/${data.id}`, { ...data });
}
export function removeProduct(data) {
  return api.delete(`/product/${data}`);
}
export function getAllOrders() {
  return api.get(`/order`);
}
export function getAllUsers() {
  return api.get(`/user`);
}
export function allUsersOrder() {
  return api.get(`/order/user`);
}
