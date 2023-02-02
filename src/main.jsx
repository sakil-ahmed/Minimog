import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./Styles/Globalstyle";
import { Shop } from "./pages/Shop";
import { Products } from "./pages/Products";
import { Blogs } from "./pages/Blogs";
import { Pages } from "./pages/Pages";
import { Home } from "./pages/Home";
import { SelectOption } from "./pages/SelectOption";
import { WishList } from "./pages/WishList";
import PageNotFound from "./pages/404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/:to" element={<SelectOption />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
