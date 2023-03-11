import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./Styles/Globalstyle";
import {
  Home,
  Products,
  Blogs,
  PageNotFound,
  Shop,
  WishList,
  SelectOption,
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const client = new QueryClient();
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={client}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:to" element={<SelectOption />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/blog" element={<Blogs />} />
              </Route>
            </Routes>
          </BrowserRouter>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </>
);
